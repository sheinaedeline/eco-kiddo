module.exports = {
  content: [
    "./App/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#aad542",
        primaryBlu: "#5FA8FF",
        lightBlu: "#EAF4FF",
      },
    },
  },
  plugins: [],
};
