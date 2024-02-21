/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0px 0px 20px #4a5568',
        'xs' : '0px 0px 10px #4a5568'
      },
      minWidth:{
        '90' : '360px',
        '70' :  '280px',
        '100' : '400px'
      },
      maxWidth :{
        '10xl': '1600px',
        '90' : '360px',
      },
      fontFamily: {
        'arial': "Arial"
      },
      width: {
        '100' : '400px',
        '124' : '550px',
        '95%' : '95%',
        '120' : '480px'
      },
      scale: {
        '1.2' : '1.2'
      },
      height: {
        '18' : '72px',
        '95vh' : '95vh',
        '80vh' : "80vh",
      },
      right: {
        '60' : '250px'
      }
    },
  },
  plugins: [],
}

