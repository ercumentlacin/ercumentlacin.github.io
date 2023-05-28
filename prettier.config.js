/** @type {import("prettier").Options} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx'],
  organizeImportsSkipDestructiveCodeActions: true,

  "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true
};
