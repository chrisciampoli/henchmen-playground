import vue from 'eslint-plugin-vue'

export default [
    {
        files: ['**/*.{js,ts,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                defineNuxtConfig: 'readonly',
                navigateTo: 'readonly',
                $fetch: 'readonly',
                useHead: 'readonly',
                useSeoMeta: 'readonly',
                useRoute: 'readonly',
                useRouter: 'readonly',
                useState: 'readonly',
                useCookie: 'readonly',
                useRuntimeConfig: 'readonly',
                process: 'readonly',
                console: 'readonly',
                window: 'readonly',
                document: 'readonly'
            }
        },
        plugins: {
            vue
        },
        rules: {
            // Vue specific rules
            'vue/multi-word-component-names': 'off',
            'vue/no-multiple-template-root': 'off',
            'vue/html-indent': ['error', 4],
            'vue/script-indent': ['error', 4],
            
            // General rules
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'never'],
            'no-console': 'warn',
            'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
        }
    },
    ...vue.configs['flat/recommended']
]