import Header from '~/Components/Layout/components/Header';
import Siderbar from './Siderbar';

// SCSS
import styles from './DefaultLayout.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Siderbar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
