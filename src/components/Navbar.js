import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

const Navbar = () => {
    return (
        <header id="navbar">
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="nav-link logo font-serif text-3xl"
                        >
                            np
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
