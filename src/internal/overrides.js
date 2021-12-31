/**
 * 获取必要的 overrides
 * @param {CustomOptions} options 自定义配置项
 * @returns {Array<string>}
 */
function getOverrides(options) {
  const overrides = [];
  const { ts: isSupportTs, frame } = options;
  const { lib } = frame;

  if (typeof lib === 'boolean' && !!lib) {
    if (lib.toLocaleLower() === 'vue') {
      overrides.push({
        files: ['*.js'],
        parser: '@babel/eslint-parser',
      });
    }
  } else if (isSupportTs) {
    overrides.push({
      files: ['*.js'],
      parser: '@babel/eslint-parser',
    });
  }

  return overrides;
}

module.exports = {
  getOverrides,
};
