module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
      },
    ],

    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    //TODO remove this after adding winston and making bugsnag a transport
    'no-console': 'off',
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
  },
};
