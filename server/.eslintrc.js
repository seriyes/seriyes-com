module.exports = {
  extends: 'airbnb-base',
  plugins: [ 'jest' ],
  env: {
    'jest': true,
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'global-require': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-undef': 'warn',
    'no-restricted-syntax': 'warn',
    'no-underscore-dangle': 'off',
    'no-await-in-loop': 'off',
    'new-cap': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'prefer-destructuring': 'off',
  },
};