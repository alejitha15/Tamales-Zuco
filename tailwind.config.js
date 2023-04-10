/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
    container:{
    center:true,
  },
  colors: {
    'verde': '#21b972',
    'Amarillo': '#ffbd59',
    'Azul': '#29118a'
  },
  fontFamily:{
  'Titulo':['"Mochiy Pop One"','"Sans-Serif"'],
  'Texto':['"Poppins"','"Sans-Serif"'],
},
},
  },
  plugins: [],
}

