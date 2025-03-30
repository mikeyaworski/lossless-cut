module.exports = {
  extends: ['mifi'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'jsx-a11y/control-has-associated-label': 0,

    // My rule changes
    'linebreak-style': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'unicorn/prefer-spread': 0,
    'arrow-parens': 0,
    'import/prefer-default-export': 0,
  },

  overrides: [
    {
      files: ['./src/renderer/**/*.{js,cjs,mjs,jsx,ts,tsx,mts}'],
      env: {
        node: false,
        browser: true,
      },
      rules: {
        'no-console': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
    {
      files: ['./src/preload/**/*.{js,cjs,jsx,ts,tsx}'],
      env: {
        browser: true,
      },
      rules: {
        'no-console': 0,
      },
    },
    {
      files: ['./script/**/*.{js,cjs,mjs,jsx,ts,tsx,mts}', 'electron.vite.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': ['error', {
          devDependencies: true,
          optionalDependencies: false,
        }],
      },
    },
  ],
};
