/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { Poppins: ["Poppins", "sans-serif"] },
      boxShadow: {
        "custom-white": "0px 2px 5px 0px #FFFFFF", // Custom shadow with specified values
      },
      fontSize: {
        xxs: "0.60rem",
      },
      backgroundColor: {
        custom: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
