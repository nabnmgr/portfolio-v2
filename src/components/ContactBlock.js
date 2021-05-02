import React from 'react';
import './ContactBlock.scss';

const ContactBlock = () => {
    return (
        <div id="contact-block" className="container mx-auto px-4 text-center">
            <div className="contact mb-32">
                <h2 className="my-16">Get in touch</h2>
                <div className="email">
                    <p className="email-text">nabinpurja93@gmail.com</p>
                    <a
                        class="email-button"
                        href="mailto:nabinpurja93@gmail.com"
                    >
                        Send an email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactBlock;
