module.exports = {
  root: true,
  env: { node: true, browser: true, es2021: true },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn', 'promise'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'prettier', // отключает все форматные правила в пользу prettier
  ],
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    // Типы
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Промисы
    'no-void': ['error', { allowAsStatement: true }],
    'promise/always-return': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-nesting': 'warn',

    // Unicorn (дополнительные проверки)
    'unicorn/filename-case': 'off',
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-top-level-await': 'off',

    // Прочее
    'no-console': 'warn',
  },
};
