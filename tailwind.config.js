/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens:{
        "xxl": "2200px",
        "xl": "2200px",
        "lg": "1666px",
        "md": "1236px",
        "sm": "887px",
        "phone": "652px",
      }
    }
  },
  plugins: []
};