/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html","./dist/service.html","./dist/about.html"],
  theme: {
    screens: {
      'sm': '768px',
      // => @media (min-width: 640px) { ... }

      'md': '1000px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

