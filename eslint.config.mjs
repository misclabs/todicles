import globals from "globals";
import eslintJs from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginLit from "eslint-plugin-lit";

export default [
  {
    files: ["src/**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: ["**/*.config.mjs", "docs/**/*.js", "prepackage/"],
  },
  eslintJs.configs.recommended,
  ...typescriptEslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginLit.configs["flat/recommended"],
];
