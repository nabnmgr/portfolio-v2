import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { GithubIcon, CodepenIcon, LinkedinIcon } from './DevIcons';
import './ContactBlock.scss';

const ContactBlock = () => {
    return (
        <div id="contact-block" className="container mx-auto px-4 text-center">
            <div className="contact my-24">
                <h2 className="my-8">Get in touch</h2>
                <div className="social-links">
                    <OutboundLink
                        href="https://www.linkedin.com/in/nabin-purja/"
                        target="_blank"
                        rel="noopener"
                        aria-label="Github"
                    >
                        <LinkedinIcon />
                    </OutboundLink>
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
            </div>
        </div>
    );
};

export default ContactBlock;
