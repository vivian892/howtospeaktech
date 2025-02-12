/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  compilerOptions: {
    typeRoots: ["./node_modules/@types", "./@types"],
  },
  include: ["src/**/*"],
  plugins: [],
  references: [
    { path: "./tsconfig.app.json" },
    { path: "./tsconfig.node.json" },
  ],
};
