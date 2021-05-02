import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

const Navbar = () => {
    return (
        <header id="navbar" className="container mx-auto">
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
                        <a href="#projects-block" className="nav-link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact-block" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
