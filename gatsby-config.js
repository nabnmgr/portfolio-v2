require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: `${__dirname}/src/images/icons`,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `ylmb55ttnu95`,
                accessToken: process.env.CONTENTFUL_API_KEY,
            },
        },
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                postCssPlugins: [
                    require('tailwindcss'),
                    require('./tailwind.config.js'), // Optional: Load custom Tailwind CSS configuration
                ],
            },
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: 'Roboto',
                            variants: ['300', '400', '500'],
                        },
                        {
                            family: 'Roboto Mono',
                            variants: ['300', '400', '500'],
                        },
                        {
                            family: 'Orelega One',
                            variants: ['400'],
                        },
                    ],
                },
            },
        },
    ],
};
