/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#4fa8dd',
        neonBlue: '#73EFDC',
        nnmBlue: '#4EA8DD',
      },
      fontFamily: {
        primary: ['Inter'],
      },
      backgroundImage:{
        'hero-pattern': "url('~/assets/images/hero-background-pattern.png')"
      }
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
