import pluginVue from 'eslint-plugin-vue'

export default [
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue', '**/*.js', '**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-multiple-template-root': 'off'
    }
  }
]