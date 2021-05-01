import React from 'react';
import Navbar from '../components/Navbar';
import TitleBlock from '../components/TitleBlock';
import AboutBlock from '../components/AboutBlock';
import ProjectsBlock from '../components/ProjectsBlock';
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <TitleBlock />
            <AboutBlock />
            <ProjectsBlock />
            <ContactBlock />
            <Footer />
        </div>
    );
}
