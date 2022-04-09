module.exports = {
  content: ['_site/**/*.html'],
  safelist: [],
  theme: {
    extend: {
      colors: {
        change: 'transparent',
        ghost: '#FF1A75',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '' },
            'code::after': { content: '' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
  ],
};
