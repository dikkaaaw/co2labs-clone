/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
