module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: 2022, sourceType: "module" }, // Changed ecmaVersion to 2022
  settings: { react: { version: "18.2" } },
  plugins: [], // Removed 'react-refresh' plugin
  rules: {
    "react/jsx-no-target-blank": "off",
    // Removed 'react-refresh' rule
  },
};
