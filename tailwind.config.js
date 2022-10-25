/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'url("..//src/Assets/banner.jpg")'
      }
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  //...
  plugins: [require("daisyui")],
}
