const heightExtend = {
    screen: ['100vh', '100svh']
};

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'inherit': 'inherit',
            'current': 'currentColor',
            'transparent': 'transparent',
            'main': '#f2efea',
            'field': '#ffffdd',
            'white': '#ffffff',
            'blue': {
                '100': '#5c99fa',
                '50': '#8bb2f6',
            },
            'green': {
                '100': '#43a365',
                '50': '#89e8aa',
            },
            'rose': '#e6948e',
            'red': '#c93126',
            'yellow': '#e6d627',
            'gold': '#CDA973',
            'text-color': {
                100: '#E6E6E6',
                200: '#CCCCCC',
                400: '#999999',
                500: '#4A4A4A'
            },
            'black': '#000',
        },
        extend: {
            fontFamily: {sans: ['Cursive', 'sans-serif']},
            height: heightExtend,
            minHeight: heightExtend,
            maxHeight: heightExtend,
            spacing: {
                13: '3.25rem',
                15: '3.75rem',
                17: '4.25rem',
                22: '5.5rem'
            },
            fontSize: {
                'xxs': '0.625rem',
                '3.5xl': '2rem',
                '4.5xl': '2.5rem'
            },
            screens: {
                '3xl': '2000px',
                '2xl': '1800px',
                'xl': '1366px',
                'md': '1024px'
            }

        },
    },
    plugins: [],
}
