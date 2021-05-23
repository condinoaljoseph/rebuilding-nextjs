const colors = require('tailwindcss/colors')


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        warmGray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
      },
      spacing: {
        '100': '100px',
        '330': '330px',
        '185': '185px',
        '5xl': '64rem',
        '18': '4.5rem',
        '15': '3.750rem',
        '34': '8.5rem',
        '0.25': '1px',
        '5.5': '1.375rem',
        '12.5': '3.125rem',
        '7.5': '1.875rem',
        '13': '3.25rem',
        '30': '7.5rem',
      },
      fontFamily: {
        'Inter': ['Inter'],
        'Menlo': ['Menlo'],
      },
      boxShadow: {
        gray: '0 4px 14px 0 rgb(0 0 0 / 10%)',
        blue: '0 4px 14px 0 rgb(0 118 255 / 39%)',
        'blue-md': '0 6px 20px rgb(0 118 255 / 23%)',
        // 'gray-md': '0 10px 20px rgb(0 0 0 / 8%), 0 5px 12px rgb(0 0 0 / 10%)',

        'gray-sm': '0px 5px 40px rgb(0 0 0 / 4%)',
        'gray-md': '0 6px 20px rgb(93 93 93 / 23%)',
        'gray-lg': '0 8px 30px rgba(0,0,0,0.12)',
        'gray-xl': '0px 30px 60px rgb(0 0 0 / 12%)',
      },
      borderRadius: {
        '7': '7px',
        '5': '5px',
      },
      fontSize: {
        '70': ['70px', '77px'], // see title
        '40': ['40px'],
        '100': ['100px', '100px'],
        '32': ['32px', '42px'],
        'xl': ['20px'],
      },
      letterSpacing: {
        '-3': '-3px',
        '-0.3': '-0.3px',
        '-0.4': '-0.4px',
        '-0.5': '-0.5px',
        '-1': '-1px',
        '-2.5': '-2.5px',
      },
      lineHeight: {
        '6.5': '1.625rem',
        '66': '66px',
        '58': '58px',
        '28': '28px',
        '26': '26px',
        '24': '24px',
        '32': '32px',
        '38': '38px',
      },
      screens: {
        'x-lg': { 'min': '960px' },
        'min-500': { 'min': '500px' },
      },
      animation: {
        'move-left-fast': 'move-left 80s linear infinite',
        'move-left-slow': 'move-left 100s linear infinite',
      },
      transitionDuration: {
        '350': '350ms',
        '400': '400ms',
        '600': '600ms',
      },
      maxWidth: {
        'screen': '100vw',
      },
      keyframes: {
        'move-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

