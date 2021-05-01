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
                            <span className="initial first">n</span>
                            <span className="initial last">p</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="nav-link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
