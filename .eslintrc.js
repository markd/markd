module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  plugins: [
    'html'
  ],
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/return-in-computed-property': 2,
    'vue/no-dupe-keys': 2,
    'vue/require-render-return': 2,
    'vue/no-duplicate-attributes': 2,
    'vue/attribute-hyphenation': 2,
    'vue/html-quotes': 2,
    'vue/no-multi-spaces': 2,
    'vue/mustache-interpolation-spacing': 2,
    'vue/order-in-components': 2
  }
}
