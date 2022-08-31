/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1110px",
      xl: "1440px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightBlue: "hsl(231, 77%, 90%)",
      darkBlue: "hsl(230, 35%, 7%)",
      gray: "hsl(0, 0%, 59%)",
    },

    extend: {
      fontSize: {
        sub_heading_sm: [
          "0.875rem",
          {
            letterSpacing: "0.17em",
          },
        ],
        sub_heading_lg: "21.75rem",
        head_xs: [
          "1.75rem",
          {
            letterSpacing: "4.72px",
          },
        ],
        head_md: "3.5rem",
        head_lg: "6.25rem",
        head_xl: "9.375rem",
      },
      fontFamily: {
        barlow: [`"Barlow Condensed", sans-serif`],
        belle: [`"Bellefair", serif`],
      },
    },
  },
  plugins: [],
}
