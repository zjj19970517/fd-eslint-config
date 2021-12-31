/**
 * @param {CustomOptions} options 自定义配置项
 * @returns {Array<string>}
 */
function getRules() {
  const rules = {
    quotes: ['error', 'single'],
    semi: 'error',
    'no-console': 'off',
  };

  return rules;
}

module.exports = {
  getRules,
};
