module.exports = {
  printWidth: 100,
  useTabs: false,
  tabWidth: 2,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        trailingComma: 'all',
      },
    },
    {
      files: '*.scss',
      options: {
        parser: 'scss',
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
  ],
}
