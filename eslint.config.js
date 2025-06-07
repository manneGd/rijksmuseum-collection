import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-console": "warn",
      "prefer-const": "error",
      "no-const-assign": "error",
      "no-var": "error",
      'jsx-quotes': ["error", "prefer-double"],

      // TypeScript specific rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' }
      ],

      // General ESLint rules
      'no-unused-vars': 'off', // Turned off in favor of @typescript-eslint/no-unused-vars
      'quotes': ['error', 'double'],
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eqeqeq': ['error', 'always'],

      // Object formatting
      'object-curly-newline': ['error', {
        ObjectExpression: { multiline: true, minProperties: 3 },
        ObjectPattern: { multiline: true, minProperties: 3 }
      }],
      'object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: false
      }],

      // Line breaks and spacing
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'always', prev: ['case', 'default'], next: '*' }
      ],

      // Line length and wrapping
      'max-len': ['error', {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreUrls: true
      }],
      'max-statements-per-line': ['error', { max: 1 }],

      // Chain calls formatting
      'newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 2
      }],

      // Comma style for multiline
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', {
        objects: 'always-multiline',
        functions: 'always-multiline'
      }],

      // Indentation
      'indent': ['error', 2, {
        SwitchCase: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        CallExpression: { arguments: 'first' },
        ObjectExpression: 1
      }],

      // JSX specific
      '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: 1,
        when: 'multiline'
      }],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
      '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
      '@stylistic/jsx-closing-tag-location': 'error',
      '@stylistic/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }],

      // JSX Formatting
      '@stylistic/jsx-indent': ['error', 2, {
        checkAttributes: true,
        indentLogicalExpressions: true
      }],
      '@stylistic/jsx-indent-props': ['error', 2],
      '@stylistic/jsx-one-expression-per-line': ['error', {
        allow: 'single-child'
      }],
      // '@stylistic/jsx-newline': ['error', {
      //   prevent: false,
      //   allowMultilines: true
      // }],
      '@stylistic/jsx-sort-props': ['error', {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        multiline: 'last',
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        locale: 'auto'
      }],
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-curly-spacing': ['error', {
        when: 'never',
        children: true,
        attributes: {
          allowMultiline: false
        }
      }],
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-curly-newline': ['error', {
        multiline: 'consistent',
        singleline: 'consistent'
      }],
      '@stylistic/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }],
    },
  },
)
