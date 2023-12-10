const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  rules: {
    'jsonc/no-useless-escape': 'off',
  },
})
