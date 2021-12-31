const ESLintPlugins = {
  VUE_PLUGIN: 'vue', // eslint-plugin-vue
  TS_PLUGIN: '@typescript-eslint', // @typescript-eslint/eslint-plugin
  IMPORT_PLUGIN: 'import', // eslint-plugin-import
}

/**
 * 获取所需要的 plugins
 * @param {CustomOptions} options 自定义配置项
 * @returns {Array<string>}
 */
function getPlugins(options) {
  const plugins = [];
  const { ts: isSupportTs, frame, esModule } = options;
  const { lib, vueOptions: { sfc } } = frame;

  if (typeof lib === 'boolean' && !!lib) {
    // use frame
    if (lib.toLocaleLower() === 'vue') {
      if (!!sfc) {
        plugins.push(ESLintPlugins.VUE_PLUGIN);
      }
      if (isSupportTs) {
        plugins.shift(ESLintPlugins.TS_PLUGIN);
      };
    }
  } else if (isSupportTs) {
    plugins.shift(ESLintPlugins.TS_PLUGIN);
  }

  if (esModule) {
    plugins.push(ESLintPlugins.IMPORT_PLUGIN);
  }

  return plugins;
}

module.exports = {
  getPlugins
};