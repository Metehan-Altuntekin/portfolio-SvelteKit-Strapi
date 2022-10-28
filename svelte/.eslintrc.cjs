module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    indent: 'off',
    'linebreak-style': 'off',
    quotes: 'off',
    semi: 'off',
    '@typescript-eslint/no-namespace': 'off',
  },
}
