const { getParser, getParserOptions } = require("./internal/parser");
const DefaultOptionConfig = require("./utils/default_option");
const { getTargetEnv } = require('./internal/env');
const { getPlugins } = require('./internal/plugins');
const { getExtends } = require('./internal/extends');
const { getOverrides } = require('./internal/overrides');

/**
 * 生成 ESLint 配置
 * @param {Object} option 自定义配置项
 * @returns
 */
const generateEslintConfig = (option) => {
  const _options = Object.assign({}, DefaultOptionConfig, option);
  const parser = getParser(_options);
  const parserOptions = getParserOptions(_options);
  const env = getTargetEnv(_options);
  const plugins = getPlugins(_options);
  const eslintExtends = getExtends(_options);
  const overrides = getOverrides(_options);

  return {
    root: true,
    parser,
    parserOptions,
    env,
    plugins,
    extends: eslintExtends,
    overrides
  }
}

module.exports = (options) => {
  const { debugLog } = options;
  const config = generateEslintConfig(options);
  if (debugLog) console.log('[DEBUG_ESLINT_CONFIG]: ', config);
  return config;
};
