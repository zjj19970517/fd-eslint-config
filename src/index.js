const { getParser, getParserOptions } = require('./internal/parser');
const DefaultOptionConfig = require('./utils/default_option');
const { getTargetEnv } = require('./internal/env');
const { getPlugins } = require('./internal/plugins');
const { getExtends } = require('./internal/extends');
const { getOverrides } = require('./internal/overrides');
const mergeDeep = require('./utils/merge');
const { getRules } = require('./internal/rules');

/**
 * 生成 ESLint 配置
 * @param {CustomOptions} customOption 自定义配置项
 * @returns
 */
const generateEslintConfig = (customOption) => {
  const options = mergeDeep(DefaultOptionConfig, customOption);

  const parser = getParser(options);
  const parserOptions = getParserOptions(options);
  const env = getTargetEnv(options);
  const plugins = getPlugins(options);
  const eslintExtends = getExtends(options);
  const overrides = getOverrides(options);
  const rules = getRules(options);

  const eslintConfig = {
    root: true,
    parserOptions,
    env,
    plugins,
    extends: eslintExtends,
    overrides,
    rules,
  };

  if (parser) {
    eslintConfig.parser = parser;
  }

  return eslintConfig;
};

module.exports = (options) => {
  const { debugLog } = options;
  const config = generateEslintConfig(options);
  if (debugLog) console.log('[DEBUG_ESLINT_CONFIG]: ', config);
  return config;
};
