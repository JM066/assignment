module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            gray: {
                50: '#f9fafb',
                100: '#f3f4f6',
                200: '#e5e7eb',
                300: '#d1d5db',
                500: '#6b7280',
                600: '#4b5563',
                700: '#374151',
            },
            blue: {
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#38bdf8',
            },
            red: {
                600: '#dc2626',
                800: '#b91c1c',
            },
        },
        extend: {},
    },
    variants: {},
    plugins: [],
}
