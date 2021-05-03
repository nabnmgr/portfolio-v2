import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaChevronUp } from 'react-icons/fa';
import { GithubIcon, CodepenIcon } from './DevIcons';
import './Footer.scss';

gsap.registerPlugin(ScrollToPlugin);

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
            <a
                className="to-top"
                onClick={e => {
                    e.preventDefault();
                    gsap.to(window, {
                        duration: 0.5,
                        scrollTo: 0,
                    });
                }}
            >
                <FaChevronUp />
                <p>Top</p>
            </a>
        </footer>
    );
};

export default Footer;
