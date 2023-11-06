/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        "xxl": "2200px",
        "xl": "2200px",
        "lg": "1666px",
        "md": "1236px",
        "sm": "887px",
        "phone": "652px",
      },
      colors: {
        "primary": "#969696",
        "color": "#ef5300",
        "navbar": "#543220"
      },
      textColor: {
        "dark": "#292828",
        "light": "#ebebeb"
      },
      fontFamily: {
        default: ['Miriam Libre', 'system-ui']
      }
    }
  },
  plugins: []
};