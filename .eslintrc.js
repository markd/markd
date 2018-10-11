module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: ['standard', 'plugin:vue/recommended', '@vue/prettier'],
  rules: {
    indent: 0,
    'indent-legacy': ['error', 2],
    'no-console': 1
  }
}
