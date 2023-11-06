import classNames from 'classnames/bind';
import Styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/Components/Image';
const cx = classNames.bind(Styles);
const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/572c2538b9cf165f6ffd0e4f39c115cc~c5_100x100.jpeg?x-expires=1697788800&x-signature=TBdCV9tLrKM8Ij3kTlrV%2FvREY9w%3D"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    Nguyễn Văn A
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
};

export default AccountItem;
