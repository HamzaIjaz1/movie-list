/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',
        bodyBackground: '#093545',
        primary: '#2BD17E',
        white: '#FFFFFF',
        input: '#224957',
        background2: '#092C39',
      },
      colors: {
        transparent: 'transparent',
        primary: '#2BD17E',
        white: '#FFFFFF',
        input: '#224957',
      },
      borderColor: {
        transparent: 'transparent',
        primary: '#2BD17E',
        white: '#FFFFFF',
        input: '#224957',
      },
      borderRadius: {
        4: '4px',
        5: '5px',
        10: '10px',
        12: '12px',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    {
      "plugins": ["babel-plugin-macros"]
    },
    function ({ addBase }) {
      addBase({
        body: {
          padding: "0",
          margin: "0",
          fontFamily: "'Montserrat', 'sans-serif'",
          backgroundColor: "#093545",
          color: "#fff"
        },
        html: {
          padding: "0",
          margin: "0",
          fontFamily: "'Montserrat', 'sans-serif'",
        },
        '*': {
          boxSizing: "border-box",
          fontFamily: "'Montserrat', 'sans-serif'",
        },
        li: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        ul: {
          listStyle: "none",
          margin: "0",
          padding: "0",
        },
        a: {
          display: "inline",
          textDecoration: "none",
          transition: ".3s",
          '&:hover': {
            textDecoration: "none",
          },
        },
        p: {
          margin: "0",
          padding: "0",
        },
        h1: {
          margin: "0",
          padding: "0",
        },
        h2: {
          margin: "0",
          padding: "0",
        },
        h3: {
          margin: "0",
          padding: "0",
        },
        h4: {
          margin: "0",
          padding: "0",
        },
        h5: {
          margin: "0",
          padding: "0",
        },
        h6: {
          margin: "0",
          padding: "0",
        },
        '.container': {
          "@media(min-width: 1536px)":{
            maxWidth: '1200px !important',
            width: '100%',
            margin: '0 auto',
          }
        },
      });
    },
  ],
}


