const eslintPluginReact = require("eslint-plugin-react");
const eslintPluginTypescript = require("@typescript-eslint/eslint-plugin");
const eslintPluginJsxA11y = require("eslint-plugin-jsx-a11y");
const typescriptParser = require("@typescript-eslint/parser");

module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: eslintPluginReact,
      "@typescript-eslint": eslintPluginTypescript,
      "jsx-a11y": eslintPluginJsxA11y,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "warn",
    },
  },
];
