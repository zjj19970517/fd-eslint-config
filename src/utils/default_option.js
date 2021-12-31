// 默认配置项
const DefaultOptionConfig = {
  ts: true, // 是否为 TS 项目
  babel: false, // 是否需要配合 babel
  // 框架
  frame: {
    lib: 'vue', // 使用的框架类型，eg: vue/react/false
    // vue 配置
    vueOptions: {
      sfc: true, // .vue 单文件组件形式
      jsx: false, // 是否使用 jsx
    },
    reactOptions: {}, // react 配置
  },
  env: ['browser', 'node'], // 环境变量
  esModule: true, // esm/commonJS
  debugLog: false, // 是否开启 debug log
};

module.exports = DefaultOptionConfig;
