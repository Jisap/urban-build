/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["DM Sans", "sans-serif"], // Al definir los nombres de las fuentes directamente, Tailwind generará las clases correctamente.
      secondary: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#ffca3b",
        border: "#d7d7d7",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)"
      },
      backgroundImage:{
        hero: "url('/assets/img/hero/bg.jpg')",
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

