const generateEslintConfig = require('./src/index');

const eslintConfig = generateEslintConfig({
  ts: false,
  frame: {
    lib: false,
  },
  esModule: false,
  debugLog: true,
});

module.exports = eslintConfig;
