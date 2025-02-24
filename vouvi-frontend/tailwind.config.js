/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {
      white: "#f5f5f4",
      black: "#02020b",
      red: "#e30000",
      yellow: "#ffb515",
      primary: {
        100: "#edcff2",
        200: "#7c20be",
        300: "#3e006b",
        400: "#000f1f",
        500: "#001B36",
      },
      secondary: {
        100: "#d6ebff",
        200: "#007fff",
        300: "#000e1d",
        400: "#002952",
      },
      green: {
        100: "#84ce7a",
        200: "#14a900",
        300: "#0d3512",
      },
      orange: {
        100: "#fabe7a",
        200: "#ff8800",
        300: "#351d09",
      },
      pink: {
        100: "#Fa7abc",
        200: "#ff0084",
        300: "#350223",
      },
    },

    fontSize: {
      xs: ["0.875rem", "1rem"] /* 14px */,
      sm: ["1rem", "1.5rem"] /* 16px */,
      md: ["1.5rem", "1.8rem"],
      // base: ["1.5rem", "1.8rem"] /* 14px */,
      base: ["2.25rem", "2.5rem"] /* 36px */,
      lg: ["3rem", 1] /* 48px */,
      xl: ["4rem", 1] /* 64px */,
      "2xl": ["6rem", 1] /* 96px */,
    },

    extend: {
      fontFamily: {
        sans: ["Outfit"],
      },

      borderRadius: {
        sm: "20px",
        md: "24px",
        lg: "30px",
      },

      screens: {
        xs: "450px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
