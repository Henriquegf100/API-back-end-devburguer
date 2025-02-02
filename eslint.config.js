import airbnb from "eslint-config-airbnb-base";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        // Defina suas variáveis globais aqui, se necessário
      },
    },
    plugins: {
      prettier,
      import: importPlugin,
    },
    rules: {
      // Defina as regras do Airbnb aqui
      ...airbnb.rules,
      "prettier/prettier": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "always",
          jsx: "always",
        },
      ],
    },
  },
];
