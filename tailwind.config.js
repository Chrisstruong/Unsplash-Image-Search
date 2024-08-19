/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-banner": "url(https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9hdHxlbnwwfHwwfHx8MA%3D%3D)"
      }
    },
  },
  plugins: [],
}