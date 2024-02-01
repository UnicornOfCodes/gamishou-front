/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,md,mdx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#F36100",
          secondary: "teal",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
