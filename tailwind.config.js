/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': 'url("..//src/Assets/banner.jpg")',
        'hero-image-background': ' filter: brightness(0.8);'
      }
    },
  },
  daisyui: {
    themes: ["cupcake"],
  },
  //...
  plugins: [require("daisyui")],
}
