// tailwind.config.js
const attributes = require("tailwindcss-attributes");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), attributes],
};
