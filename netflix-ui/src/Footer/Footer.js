import React from 'react';

import SocialLinks from './SocialLinks';
import FooterLinks from './FooterLinks';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.box}>
            <div className={styles.socialLinks}>
                <SocialLinks />
            </div>
            <FooterLinks />
        </footer>
    );
};

export default Footer;