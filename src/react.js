module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugin: ['react-hooks'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jxs', '.tsx'],
      },
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-max-depth': [
      'warn',
      {
        max: 4,
      },
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': [
      'warn',
      {
        allow: 'literal',
      },
    ],
    'react/jsx-sort-default-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: true,
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
  },
  settings: {
    react: {
      version: 'version',
    },
  },
};
