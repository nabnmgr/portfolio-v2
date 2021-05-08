import { Link } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';

const PageNotFound = () => (
    <div className="h-screen container mx-auto text-center flex flex-col justify-center">
        <SEO title="404 - Page not found!" />
        <h1>404</h1>
        <p className="uppercase">Page not found!</p>
        <Link to="/" className="underline italic my-4 inline-block">
            Return to home
        </Link>
    </div>
);

export default PageNotFound;
