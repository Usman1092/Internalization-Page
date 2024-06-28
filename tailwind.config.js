/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-bg1":"url('/grey-bg.png');",
        "boat":"url('/boat.png');",
        "dots":"url('/dots.png');",
        "blue":"url('/blue.png');",
        "car":"url('/car.png');",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "bg1": "rgba(143, 224, 230, 1)",
        "bg2": "#7E87D5",
        "bg": "rgba(67, 99, 153, 0.9)",
        "top": "rgba(146, 197, 241, 1)",
        "bottom": "rgba(67, 99, 153, 1)",
        "head": "#757BA1",
        "dbg":"rgba(93, 101, 155, 1)",
        "sfg":"#F5BE60",
       "tb":"#84A2DB",
       "bt":"#F5BE60",
       "ge":"rgb(243 244 246);"
      }
    },
  },
  plugins: [],
};
