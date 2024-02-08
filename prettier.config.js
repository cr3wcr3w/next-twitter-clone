/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  "singleQuote": true,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "semi": true,
  "arrowParens": "avoid",
  "endOfLine": "auto"
};

export default config;
