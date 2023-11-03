import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('button-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('title')}>{title}</h4>
        </header>
    );
}

export default Header;
