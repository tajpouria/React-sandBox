module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'babel'],
  parser: 'babel-eslint',
  rules: {
    'no-unused-expressions': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'no-plusplus': 'off',
  },
};
