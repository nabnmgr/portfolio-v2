import React from 'react';
import Portra from '../components/35mm/Portra';
import SEO from '../components/SEO';

const PortraPage = () => (
    <div className="portra-page">
        <SEO
            title="35mm film gallery"
            description="35mm film photography portfolio - London"
        />
        <Portra />
    </div>
);

export default PortraPage;
