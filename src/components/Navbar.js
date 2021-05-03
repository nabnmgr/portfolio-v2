import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Navbar.scss';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const navbarRef = useRef(null);

    useEffect(() => {
        gsap.set(navbarRef.current, { visibility: 'visible' });
        gsap.set(window, { scrollTo: 0 });

        const timeline = gsap.timeline({
            delay: 3.2,
        });

        timeline.from(navbarRef.current, {
            druation: 0.6,
            autoAlpha: 0,
            y: -20,
            ease: 'power2.out',
        });
    }, []);

    const scrollToAnchor = e => {
        e.preventDefault();
        const anchor = e.target.hash;
        gsap.to(window, {
            duration: 0.5,
            scrollTo: anchor,
        });
    };

    return (
        <header id="navbar" className="container mx-auto" ref={navbarRef}>
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="nav-link logo font-serif text-3xl"
                        >
                            <div className="initials">
                                <span className="initial first">n</span>
                                <span className="initial last">p</span>
                                <span className="initial full-stop">.</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#projects-block"
                            className="nav-link"
                            onClick={e => {
                                e.preventDefault();
                                scrollToAnchor(e);
                            }}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact-block"
                            className="nav-link"
                            onClick={e => {
                                e.preventDefault();
                                scrollToAnchor(e);
                            }}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
