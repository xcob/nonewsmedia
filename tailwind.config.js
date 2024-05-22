/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#4fa8dd',
      },
      fontFamily: {
        primary: ['Inter'],
      },
    },
  },
  daisyui: {
    // base: false,
    themes: [
      'winter',
      'dark',
    ],

  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
