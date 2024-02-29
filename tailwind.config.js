/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.{blade.php,js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#071a2b",
      },
      fontFamily: {
        inter: ["Inter", "sana-serif"]
      }
    },
  },
  plugins: [],
}

