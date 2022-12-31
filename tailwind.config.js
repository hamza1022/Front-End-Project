/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("flowbite/plugin"),
    
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {},
  },
  variants :{
    extend:{
      display : ['group-focus']
    },
  },
  colors: {
    headingColor: "#2e2e2e",
    textColor: "#515151",
    cartNumBg: "#e80013",
    primary: "#f5f3f3",
    cardOverlay: "rgba(256,256,256,0.4)",
    lighttextGray: "#9ca0ab",
    card: "rgba(256,256,256,0.8)",
    cartBg: "#282a2c",
    cartItem: "#2e3033",
    cartTotal: "#343739",
  },
  plugins: [],
}
