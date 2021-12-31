# @meils/eslint-config

统一的 ESLint 规范配置。

## Install

```sh
npm i @meils/eslint-config -D
```

## Usage

```js
// .eslintrc.js
const generateEslintConfig = require('@meils/eslint-config');

// 传入自定义配置，产出 ESLint 配置
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

## Options

> 默认自定义配置如下：

```js
{
  ts: true, // 是否为 TS 项目
  babel: false, // 是否需要配合 babel
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
  esModule: true, // esm/commonJS
  debugLog: false // 是否开启 debug log
}
```

## Recommend

> 推荐几个配置模版；

### js、commonjs

```js
{
  ts: false,
  frame: {
    lib: false,
  },
  esModule: false,
}
```

### vue(sfc)、js、esModule

```js
{
  ts: false,
  babel: true,
  frame: {
    lib: 'vue',
    vueOptions: {
      sfc: true
    }
  },
  esModule: true,
}
```

### vue(sfc)、ts、esModule

```js
{
  ts: true,
  babel: true,
  frame: {
    lib: 'vue',
    vueOptions: {
      sfc: true
    }
  },
  esModule: true,
}
```

### vue(jsx)、ts、esModule

```js
{
  ts: true,
  babel: true,
  frame: {
    lib: 'vue',
    vueOptions: {
      sfc: false,
      jsx: true
    }
  },
  esModule: true,
}
```

### ts、esModule

```js
{
  ts: true,
  frame: {
    lib: false,
  },
  esModule: true,
}
```