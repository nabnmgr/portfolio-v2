const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
                serif: ['Orelega One', 'cursive'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                h1: { fontSize: theme('fontSize.8xl') },
                h2: { fontSize: theme('fontSize.6xl') },
                h3: { fontSize: theme('fontSize.5xl') },
                h4: { fontSize: theme('fontSize.4xl') },
                h5: { fontSize: theme('fontSize.3xl') },
                h6: { fontSize: theme('fontSize.2xl') },
                'h1, h2, h3, h4, h5, h6': {
                    fontFamily: theme('fontFamily.serif'),
                },
            });
        }),
    ],
};
