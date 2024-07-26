/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.nav-links li': {
          '@apply hover:text-[#088178] transition-all duration-200': {},
        },

        '.active': {
          '@apply text-[#088178] transition-all duration-200': {},
        },
      });
    },
  ],
};
