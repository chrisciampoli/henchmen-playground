module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'acu',
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};