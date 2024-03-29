/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors: {
        'background': '#2B2245',
        'rosa': '#721cb8',
        'roxo': '#995bd5',
        'vermelho': '#E86161',
        'verde': '#7CE861',
        'amarelo': '#FFD56A',
        'laranja': '#FF9D43',
      },
    },
    fontFamily: {
      'poppins': ['poppins', 'sans-serif']
    },
    plugins: [],
  },
  plugins: [],  
}