module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'comma-dangle': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    'wrap-iife': 'off',
    'operator-linebreak': 'off',
    'no-nested-ternary': 'off',
    'spaced-comment': 'off',
    'class-methods-use-this': 'off',
    'no-proto': 'off',
    'implicit-arrow-linebreak': 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'no-plusplus': 'off',
  },
};
