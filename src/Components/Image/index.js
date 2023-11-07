import { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Images.module.scss';
import images from '~/assets/images';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
        // setFallback('https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png');
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            ref={ref}
            {...props}
            onError={handleError}
            alt={alt}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
