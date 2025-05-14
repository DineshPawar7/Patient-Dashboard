/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'acme-primary': '#1D4ED8', // Example primary color (blue-700)
        'acme-secondary': '#10B981', // Example secondary color (emerald-500)
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}