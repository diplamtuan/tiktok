import classNames from 'classnames/bind';
import Styles from './Popper.module.scss';

const cx = classNames.bind(Styles);
const Wrapper = ({ children, className }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

export default Wrapper;
