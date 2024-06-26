import config from '@pengzhanbo/eslint-config-vue'

export default config({
  regexp: false,
  ignores: [
    'lib',
  ],
  globals: {
    __VUEPRESS_VERSION__: 'readonly',
    __VUEPRESS_BASE__: 'readonly',
    __VUEPRESS_DEV__: 'readonly',
    __VUEPRESS_SSR__: 'readonly',
    __VUE_HMR_RUNTIME__: 'readonly',
    __VUE_OPTIONS_API__: 'readonly',
    __VUE_PROD_DEVTOOLS__: 'readonly',
  },
}, {
  files: ['**/*.vue'],
  rules: {
    'vue/no-v-text-v-html-on-component': 'off',
  },
}, {
  files: ['**/*.md/*.{js,ts}'],
  rules: {
    'import/no-duplicates': 'off',
    'import/first': 'off',
    'no-new': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
  },
})
