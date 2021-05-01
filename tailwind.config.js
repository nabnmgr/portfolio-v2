const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                mono: ['Roboto mono', 'monospace'],
                serif: ['Orelega One', 'cursive'],
            },
        },
        container: {
            screens: {
                sm: '100%',
                md: '100%',
                lg: '1024px',
                xl: '1280px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                h1: { fontSize: theme('fontSize.6xl') },
                h2: { fontSize: theme('fontSize.4xl') },
                h3: { fontSize: theme('fontSize.3xl') },
                h4: { fontSize: theme('fontSize.2xl') },
                h5: { fontSize: theme('fontSize.xl') },
                h6: { fontSize: theme('fontSize.lg') },
                'h1, h2, h3, h4, h5, h6': {
                    fontFamily: theme('fontFamily.serif'),
                },
            });
        }),
    ],
};
