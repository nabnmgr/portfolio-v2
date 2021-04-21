import React from 'react';
import { Link } from 'gatsby';
import TitleBlock from '../components/TitleBlock';

export default function Home() {
    return (
        <>
            <TitleBlock />
            <Link to="/portra">Portra project</Link>
        </>
    );
}
