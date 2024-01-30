import React from 'react';

import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub, IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">
                <div className="social-icon">
                    <a href="https://linkedin.com/in/mrinnnmoy/" target='_blank' rel='noreferrer'><IoLogoLinkedin className='icon' /></a>
                    <a href="https://twitter.com/mrinnnmoy/" target='_blank' rel='noreferrer'><IoLogoTwitter className='icon' /></a>
                    <a href="https://github.com/mrinnnmoy" target='_blank' rel='noreferrer'><IoLogoGithub className='icon' /></a>
                    <a href="mailto:mrinmoy202000@gmail.com"><IoIosMail className='icon' /></a>
                </div>
                <div className="footer-bottom">
                    <span className="copyright">
                        Stackup © 2023
                    </span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;