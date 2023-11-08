module.exports = {
  parser:'@typescript-eslint/parser',
  extends: ['prettier','plugin:@typescript-eslint/recommended'],
  plugins: ['prettier','@typescript-eslint'],
  rules: {
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'prettier/prettier': 'error',
    'no-unused-vars': 'error',
    'no-console': 'error',
  },
};