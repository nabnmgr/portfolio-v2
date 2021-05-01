import React from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { GithubIcon, CodepenIcon } from './DevIcons';
import './Footer.scss';

const Footer = () => {
    return (
        <footer id="footer" className="container mx-auto p-4 text-sm">
            <div className="footer-text">
                © Nabin Purja | {new Date().getFullYear()} |
            </div>
            <div className="footer-links">
                <a
                    href="https://github.com/nabnmgr"
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                >
                    <GithubIcon />
                </a>
                <a
                    href="https://codepen.io/purja"
                    target="_blank"
                    rel="noopener"
                    aria-label="Codepen"
                >
                    <CodepenIcon />
                </a>
            </div>
            <a class="to-top">
                <FaChevronUp />
                <p>Top</p>
            </a>
        </footer>
    );
};

export default Footer;
