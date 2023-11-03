import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(style);
const Menu = ({ children, data = [] }) => {
    const render = (data) => {
        return data.map((item) => {
            return <MenuItem data={item} />;
        });
    };
    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{render(data)}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
