const Parsers = {
  VUE_SFC_PARSER: 'vue-eslint-parser',
  TS_PARSER: '@typescript-eslint/parser',
  BABEL_PARSER: '@babel/eslint-parser'
}

/**
 * 获取对应的解析器 Parser
 * @param {CustomOptions} options
 * @returns 
 */
function getParser(options) {
  const { ts: isSupportTs, frame } = options;
  const { lib, vueOptions: { sfc } } = frame;

  if (typeof lib === 'boolean' && !!lib) {
    // use frame
    if (lib.toLocaleLower() === 'vue') {
      if (!!sfc) {
        return Parsers.VUE_SFC_PARSER;
      }
      if (isSupportTs) return Parsers.TS_PARSER;
      return Parsers.BABEL_PARSER;
    }
  } else if (isSupportTs) {
    return Parsers.TS_PARSER;
  } else {
    return Parsers.BABEL_PARSER;
  }
}

/**
 * 获取 ParserOption
 * @param {CustomOptions} options
 * @returns 
 */
function getParserOptions(options) {
  const { frame } = options;
  const { lib, vueOptions: { sfc, jsx } } = frame;

  const baseParserOption = {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmafeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
      experimentalObjectRestSpread: false
    }
  }

  if (typeof lib === 'boolean' && !!lib) {
    // use frame
    if (lib.toLocaleLower() === 'vue') {
      if (!!sfc) {
        baseParserOption.parser = Parsers.VUE_SFC_PARSER;
      }
      baseParserOption.ecmafeatures.jsx = !!jsx;
    }
  }
}

module.exports = {
  getParser,
  getParserOptions
};