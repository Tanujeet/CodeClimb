// apps/user-app/tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // adjust path as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")], // ✅ scrollbar plugin yahi add hoga
};
