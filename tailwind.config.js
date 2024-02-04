/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,md,mdx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F97A06",
          secondary: "#324960",
          accent: "#293A4B",
          neutral: "#1A1A1A",
          "base-100": "#FEFFFF", // fond
          "base-200": "#EDEDED", // navigation fond
          "base-300": "#B1B1B1", // navigation
          info: "#00d4ff",
          success: "#00edb7",
          warning: "#ff9800",
          error: "#EF5D5D",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
