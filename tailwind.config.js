/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "320px",
      xms: "350px",
      xs: "390px",
      xsm: "450px",
      sm: "665px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2lg": "1090px",
      "3lg": "1325px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        "Cyan-hover": "hsl(180, 66%, 75%)",
        DarkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        body: ["Poppins", defaultTheme.fontFamily.sans],
      },
      backgroundSize: {
        "xxs%": "140% 100%",
        "xs%": "138% 100%",
        "90%": "95% 100%",
        "80%": "120% 100%",
        "70%": "65% 100%",
        "65%": "65% 100%",
        "60%": "60% 100%",
        "50%": "55% 100%",
        "40%": "100% 40%",
        "30%": "100% 30%",
        "bg-once": "100% 100%",
        "bg-tab": "100%",
      },
      backgroundImage: {
        "desk-boostImg": "url('./assets/images/bg-boost-desktop.svg')",
        "mob-boostImg": "url('./assets/images/bg-boost-mobile.svg')",
        "desk-shortenImg": "url('./assets/images/bg-shorten-desktop.svg')",
        "mob-shortenImg": "url('./assets/images/bg-shorten-mobile.svg')",
        illustration: "url('./assets/images/illustration-working.svg')",
      },
    },
  },
  plugins: [],
};
