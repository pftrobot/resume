module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        ".eslintrc.cjs",
      ],
      parserOptions: {
        sourceType: "script",
      }
    },
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    '@typescript-eslint',
  ],
  root: true,
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-tabs': 'error',
    'curly': ['error', 'all'],
    'object-curly-newline': ['error', {
      'ExportDeclaration': { multiline: true, minProperties: 3 },
      'ImportDeclaration': 'never',
      'ObjectPattern': { multiline:  false }
    }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    "quote-props": ["error", "as-needed"],
    'quotes': ['error', 'single'],
    'no-empty': 'error',
    'linebreak-style': [2, 'unix'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    "react/no-unknown-property": ["error", { "ignore": ["css"] }]
  },
}
