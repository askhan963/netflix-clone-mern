import React from 'react';

import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import TwitterIcon from './TwitterIcon';
import YoutubeIcon from './YoutubeIcon';

import styles from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={styles.box}>
            <a href="facebook.com" className={styles.iconLink}>
                <FacebookIcon />
            </a>
            <a href="instagram.com" className={styles.iconLink}>
                <InstagramIcon />
            </a>
            <a href="twitter.com" className={styles.iconLink}>
                <TwitterIcon />
            </a>
            <a href="youtube.com" className={styles.iconLink}>
                <YoutubeIcon />
            </a>
        </div>
    );
};

export default SocialLinks;