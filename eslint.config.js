import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
    js.configs.recommended,
    ...vue.configs['flat/recommended'],
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                extraFileExtensions: ['.vue']
            }
        },
        plugins: {
            '@typescript-eslint': typescript
        },
        rules: {
            ...typescript.configs.recommended.rules,
            'vue/multi-word-component-names': 'off',
            'vue/no-multiple-template-root': 'off'
        }
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: typescriptParser
            }
        }
    }
]