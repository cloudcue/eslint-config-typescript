module.exports = {
  plugins: ['vue'],

  // the ts-eslint recommended ruleset sets the parser so we need to set it back
  parser: require.resolve('vue-eslint-parser'),

  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['./index.js', 'plugin:vue/recommended'],
  rules: {
    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      files: ['shims-tsx.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // '@typescript-eslint/explicit-function-return-type': ['error'],
        // '@typescript-eslint/explicit-module-boundary-types': ['error'],
        // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
        // does not work with type definitions
        'no-unused-vars': 'off',
      },
    },
  ],
};
