module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'storybook-static'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 세미콜론 필수
    semi: ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],

    // 싱글 쿼트 사용
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],

    // 기타 스타일 규칙
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
  },
};
