import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/Components/Button';
import Menu from '~/Components/Popper/Menu';
import { DesktopIcon, InboxIcon, MessageIcon } from '~/Components/Icons';
import Image from '~/Components/Image';
import Search from '../Search';
const cx = classnames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <img src={images.lightbulbIcon} alt="LIVE Creator Hub" />,
        title: 'LIVE Creator Hub',
    },
    {
        icon: <img src={images.languageIcon} alt="Language" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <img src={images.helpIcon} alt="help" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <img src={images.keyboardIcon} alt="Keyboard" />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <img src={images.darkModeIcon} alt="darkmode" />,
        title: 'Dark mode',
    },
];

function Header() {
    const currentUser = true;
    const handleChange = (item) => {
        switch (item.type) {
            case 'language': {
                // Handle switch language
                console.log('Day la chuyen ngon ngu');
                break;
            }
            default:
                console.log(item);
                break;
        }
    };
    const newMenuItem = MENU_ITEMS.slice(1, MENU_ITEMS.length);
    const currentMenu = [
        {
            icon: <img src={images.profieIcon} alt="ProfileIcon" />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <img src={images.favoriteIcon} alt="Favorites" />,
            title: 'Favorites',
            to: '/feedback',
        },
        {
            icon: <img src={images.coinIcon} alt="Coins" />,
            title: 'Get Coins',
            to: '/feedback',
        },
        MENU_ITEMS[0],
        {
            icon: <img src={images.settingIcon} alt="Settings" />,
            title: 'Settings',
            to: '/feedback',
        },
        ...newMenuItem,
        {
            icon: <img src={images.logoutIcon} alt="logout" />,
            title: 'Log out',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                {/* Search */}
                <Search />
                {/* Action */}
                <div className={cx('action')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            {/* <button className={cx('desktop-app')}>
                                <img src={images.desktopIcon} alt="desktop" />
                            </button> */}
                            <DesktopIcon className={cx('desktop-app')} />
                            {/* <MessageIcon /> */}
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                            <DesktopIcon className={cx('desktop-app')} />

                            {/* <button className={cx('desktop-app')}>
                                <img src={images.desktopIcon} alt="desktop" />
                            </button> */}
                        </>
                    )}

                    {/* Desktop app */}
                    {currentUser ? (
                        <>
                            <Tippy content="Messages">
                                {/* <button className={cx('action-btn')}>
                                    <img src={images.messageIcon} alt="messageIcon" />
                                </button> */}
                                <MessageIcon className={cx('actionBtn')} />
                            </Tippy>
                            <Tippy content="Inbox">
                                {/* <button className={cx('action-btn')}>
                                    <img src={images.inboxIcon} alt="inboxIcon" />
                                </button> */}
                                <button className={cx('actionBtn')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" />
                                    <span className={cx('actionQuantity')}>3</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <></>
                    )}
                    <Menu data={currentUser ? currentMenu : MENU_ITEMS} onChange={handleChange}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src={images.avatar}
                                alt="avatar-user"
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            // <img className={cx('avatar-user')} src={images.avatar} alt="avatar-user" />
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
