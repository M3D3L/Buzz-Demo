module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.{vue,js}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      display: ["group-hover"],

      colors: {
        yellow: "#ff0",
        gray: "#212121",
        black: "#212121",
        jet: "#2d2d2d",
        orange: "#FF8500"
      },
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },


  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {
      display: ["group-hover"],
      width: ['group-hover',"hover"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
