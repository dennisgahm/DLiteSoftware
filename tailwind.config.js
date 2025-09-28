/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,svelte,js,ts}"],
  daisyui: {
    themes: [
      {
        // https://coolors.co/ccd5ae-e9edc9-fefae0-faedcd-d4a373
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#87C4FF",
          secondary: "#39A7FF",
          accent: "#FFEED9",
          "base-100": "white",
        },
      },
      {
        // https://coolors.co/ccd5ae-e9edc9-fefae0-faedcd-d4a373
        dark: {
          ...require("daisyui/src/theming/themes")["dim"],
          primary: "#567da3",
          secondary: "#39A7FF",
          accent: "#FFEED9",
          "base-100": "#0C0C0C",
        },
      },,
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
