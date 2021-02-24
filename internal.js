module.exports = {
  extends: ['./index.js'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true, ignoreProperties: true }],
    // '@typescript-eslint/no-use-before-define': 'off',
  },
  overrides: [],
};
