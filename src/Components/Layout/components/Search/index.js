import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '~/Components/Icons';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchServices';
const cx = classNames.bind(styles);
function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }

        const fecthApi = async () => {
            setLoading(true);
            const res = await searchServices.search(debounced);
            setSearchResults(res);
            setLoading(false);
        };
        fecthApi();
    }, [debounced]);

    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };
    return (
        // Using a wrapper <div> or <span> tag around the reference element
        // solves this by creating a new parentNode context
        <div>
            <TippyHeadless
                interactive
                visible={showResult && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {!!searchResults && searchResults.map((item) => <AccountItem key={item.id} data={item} />)}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={handleSearch}
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />
                    {!!debounced && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            {<FontAwesomeIcon icon={faCircleXmark} />}
                        </button>
                    )}

                    {/* Loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    {/* Search btn */}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
