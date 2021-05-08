import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaChevronUp } from 'react-icons/fa';
import { GithubIcon, CodepenIcon } from './DevIcons';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import './Footer.scss';

gsap.registerPlugin(ScrollToPlugin);

const Footer = () => {
    return (
        <footer id="footer" className="container mx-auto p-4 text-sm">
            <div className="footer-text">
                © Nabin Purja | {new Date().getFullYear()} |
            </div>
            <div className="footer-links">
                <OutboundLink
                    href="https://github.com/nabnmgr"
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                >
                    <GithubIcon />
                </OutboundLink>
                <OutboundLink
                    href="https://codepen.io/purja"
                    target="_blank"
                    rel="noopener"
                    aria-label="Codepen"
                >
                    <CodepenIcon />
                </OutboundLink>
            </div>
            <a
                className="to-top"
                aria-label="Scroll back to top of the page."
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
