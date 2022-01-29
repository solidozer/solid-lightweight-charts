const javascript = {
  extends: ['eslint:recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2021: true,
    browser: true,
    node: false,
  },
  files: ['**/*.js'],
};

const typescript = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    es2021: true,
    browser: true,
    node: false,
  },
  files: ['**/*.ts', '**/*.tsx'],
  plugins: ['@typescript-eslint', 'react'],
};

module.exports = {
  root: true,
  overrides: [
    {
      extends: ['eslint:recommended', 'plugin:node/recommended'],
      files: [
        '.babelrc',
        '.eslintrc.js',
        'postcss.config.js',
        'tailwind.config.js',
        'webpack.config.js',
      ],
      env: {
        es2021: true,
        node: true,
        browser: false,
      },
      rules: {
        'node/no-unpublished-require': 'off',
      },
    },
    javascript,
    typescript,
  ],
};
