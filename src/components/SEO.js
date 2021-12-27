import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;

const SEO = ({ title, description }) => {
    const { site } = useStaticQuery(query);
    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang: 'en' }}
            title={`${site.siteMetadata.title} | ${title}`}
            meta={[{ name: `description`, content: metaDescription }]}
        />
    );
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

SEO.defaultProps = {
    title: 'Frontend Engineer',
    description: 'Frontend Engineer based in London',
};

export default SEO;
