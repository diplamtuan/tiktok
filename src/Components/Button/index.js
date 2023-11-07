import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const Button = ({
    children,
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    large = false,
    disabled = false,
    className = false,
    onClick,
    leftIcon,
    rightIcon,
    ...passProps
}) => {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProps,
    };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] == 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        large,
        text,
        disabled,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            <span className={cx('icon')}>{leftIcon}</span>
            <span className={cx('title')}>{children}</span>
            <span className={cx('icon')}>{rightIcon}</span>
        </Comp>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.bool,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};
export default Button;
