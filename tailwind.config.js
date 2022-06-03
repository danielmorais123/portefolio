const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    roboto: ["Roboto", "sans-serif"],
    extend: {
      colors: {
        googleBg: "#DB4437",
        bgcolor: "#3e3e3e",
        purpleColor: "#6C63FF",
        pinkColor: "#FF6685",
      },
      width: {
        '105': "32rem",
      },
      backgroundImage: {
        waves: "url('/images/wave.svg')",
        wavesgray: "url('/images/wavegray.svg')",
      },
      boxShadow: {
        navbar: "0px 0px 15px 1px rgba(0,0,0,0.25) ",
      },
    },
    screens: {
      xs: "100px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
