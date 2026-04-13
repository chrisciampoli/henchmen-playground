import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // Assuming tsconfig.json exists or can be inferred
      },
    },
    plugins: {
      vue: pluginVue,
    },
    rules: {
      // Add any specific rules here
    }
  }
];