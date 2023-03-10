module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "airbnb"],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": 0,
    indent: [
      "error",
      2,
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "never",
    ],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always",
    ],
    "arrow-spacing": [
      "error", { before: true, after: true },
    ],
  },
}
