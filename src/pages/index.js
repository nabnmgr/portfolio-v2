import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import TitleBlock from '../components/TitleBlock';
import AboutBlock from '../components/AboutBlock';

export default function Home() {
    return (
        <>
            <Navbar />
            <TitleBlock />
            <AboutBlock />
            {/* <Link to="/portra">Portra project</Link> */}
        </>
    );
}
