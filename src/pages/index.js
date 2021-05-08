import React from 'react';
import Navbar from '../components/Navbar';
import TitleBlock from '../components/TitleBlock';
import AboutBlock from '../components/AboutBlock';
import ProjectsBlock from '../components/ProjectsBlock';
import ContactBlock from '../components/ContactBlock';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Home() {
    return (
        <div>
            <SEO />
            <Navbar />
            <TitleBlock />
            <AboutBlock />
            <ProjectsBlock />
            <ContactBlock />
            <Footer />
        </div>
    );
}
