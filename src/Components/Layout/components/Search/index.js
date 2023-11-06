import { useEffect, useState, useRef } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountItem from '~/Components/AccountItem';
import styles from './Search.module.scss';
import { SearchIcon } from '~/Components/Icons';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);
function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        getApi(debounced);
    }, [debounced]);

    const getApi = async (value) => {
        if (!value.trim()) {
            setSearchResults([]);
            return;
        }
        try {
            setLoading(true);
            const res = await fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(value)}&type=less`,
            );
            const data = await res.json();
            setSearchResults(data.data);
            setLoading(false);
        } catch (error) {
            setSearchResults([]);
            setLoading(false);
        }
    };
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResults([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
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
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
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

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
