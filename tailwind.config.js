/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burlywood: 'burlywood',
        brown: 'brown',
        lightyellow: 'lightyellow',
        shadowBox: 'brown',
        darkFont: 'darkred',
        lightFont: 'rgba(139, 0, 0, 0.6)',
        white: 'white',
      },
      screens: {
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '519px' },
        ssm: { max: '375px' },
        sm2: { min: '520px', max: '767px' },
        largeScreen: { min: '1200px' },
        extraLargeScreen: { min: '1540px' },
      },
      fontFamily: {
        bigFont: 'Bebas Neue, sans-serif',
      },
      lineHeight: {
        'extra-tight': '0.75',
        12: '3rem',
      },
    },
  },
  plugins: [],
};
