/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      inter: "var(--inter)",
    },
    extend: {
      colors: {
        customBlack: "#414141",
      },
    },
  },
  plugins: [require("daisyui")],
};
