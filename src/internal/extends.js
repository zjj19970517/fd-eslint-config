const ESLintExtends = {
  VUE_RECOMMENDED_EXTEND: 'plugin:vue/recommended', // vue-eslint-plugin
  TS_RECOMMENDED_EXTEND: 'plugin:@typescript-eslint/recommended', // @typescript-eslint/eslint-plugin
  AIRBNB_RECOMMENDED_EXTEND: 'eslint-config-airbnb-base', // eslint-config-airbnb-base
  IMPORT_RECOMMENDED_EXTEND: 'plugin:import/recommended', // eslint-config-import
  IMPORT_TYPESCRIPT_EXTEND: 'plugin:import/typescript', // eslint-config-import
};

/**
 * 获取所需要的 extends
 * @param {CustomOptions} options 自定义配置项
 * @returns {Array<string>}
 */
function getExtends(options) {
  const eslintExtends = [];
  const { ts: isSupportTs, frame, esModule } = options;
  const { lib } = frame;

  if (typeof lib === 'boolean' && !!lib) {
    if (lib.toLocaleLower() === 'vue') {
      eslintExtends.push(ESLintExtends.VUE_RECOMMENDED_EXTEND);
      if (isSupportTs) {
        eslintExtends.shift(ESLintExtends.TS_RECOMMENDED_EXTEND);
      }
    }
  } else if (isSupportTs) {
    eslintExtends.push(ESLintExtends.TS_RECOMMENDED_EXTEND);
  } else {
    eslintExtends.push(ESLintExtends.AIRBNB_RECOMMENDED_EXTEND);
  }

  if (esModule) eslintExtends.push(ESLintExtends.IMPORT_RECOMMENDED_EXTEND);
  if (esModule && isSupportTs) eslintExtends.push(ESLintExtends.IMPORT_TYPESCRIPT_EXTEND);

  return eslintExtends;
}

module.exports = {
  getExtends,
};
