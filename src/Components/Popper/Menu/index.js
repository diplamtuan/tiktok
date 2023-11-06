import { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
const cx = classNames.bind(style);
const defaultFn = () => {};
const Menu = ({ children, data = [], onChange = defaultFn, hideOnClick = false }) => {
    const [history, setHistory] = useState([{ data: data }]);
    const current = history[history.length - 1];
    const render = () => {
        return current.data.map((item, index) => {
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        const isParent = !!item.children;
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            delay={[0, 700]}
            interactive
            offset={[10, 10]}
            placement="bottom-end"
            hideOnClick={hideOnClick}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, history.length - 1));
                                }}
                            />
                        )}
                        {render()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
