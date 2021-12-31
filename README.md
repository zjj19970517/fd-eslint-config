# @meils/eslint-config

统一的 ESLint 规范配置。

## Install

```sh
npm i @meils/eslint-config -D
```

## Use

```js
// .eslintrc.js
const generateEslintConfig = require('@meils/eslint-config');

const eslintConfig = generateEslintConfig({
  ts: true,
  frame: {
    lib: 'vue',
    vueOptions: {
      sfc: true
    }
  }
})

module.exports = eslintConfig;
```

## CustomOptions

> 自定义配置项目，内容如下：

```js
{
  ts: true, // 是否为 TS 项目
  // 框架
  frame: {
    lib: 'vue', // 使用的框架类型，eg: vue/react/false
    // vue 配置
    vueOptions: {
      sfc: true, // .vue 单文件组件形式
      jsx: false // 是否使用 jsx
    },
    // react 配置
    reactOptions: {}
  },
  // 环境变量
  env: ['browser', 'node'],
  debugLog: false // 是否开启 debug log
}
```