import { useState, forwardRef } from 'react';

import classNames from 'classnames';
import styles from './Images.module.scss';
import images from '~/assets/images';
const Image = forwardRef(({ src, className, fallback: customFallback = images.noImage, ...props }, ref) => {
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
        />
    );
});

export default Image;
