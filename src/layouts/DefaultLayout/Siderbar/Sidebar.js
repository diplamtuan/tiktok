import styles from './Sidebar.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </aside>
    );
}

export default Sidebar;
