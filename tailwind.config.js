module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        topShadow: "0 -3px 10px 3px rgba(0, 0, 0, 0.1)",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1a79f4",

          secondary: "#87b9db",

          accent: "#98f9b8",

          neutral: "#262B40",

          "base-100": "#ffffff",

          info: "#295DE0",

          success: "#177868",

          warning: "#E8C111",

          error: "#E76F87",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
