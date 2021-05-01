import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import TitleBlock from '../components/TitleBlock';
import AboutBlock from '../components/AboutBlock';
import ProjectsBlock from '../components/ProjectsBlock';

export default function Home() {
    return (
        <div>
            <Navbar />
            <TitleBlock />
            <AboutBlock />
            <ProjectsBlock />
            {/* <Link to="/portra">Portra project</Link> */}
        </div>
    );
}
