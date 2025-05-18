const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const unicorn = require('eslint-plugin-unicorn');
const promise = require('eslint-plugin-promise');

/** @type {import('eslint').FlatConfig[]} */
module.exports = [
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      unicorn,
      promise,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-void': ['error', { allowAsStatement: true }],
      'promise/always-return': 'off',
      'promise/catch-or-return': 'error',
      'promise/no-nesting': 'warn',
      'unicorn/filename-case': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'no-console': 'warn',
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  },
];
