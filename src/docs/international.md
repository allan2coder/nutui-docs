# 国际化

NutUI 3.0 以上版本支持多语言。组件默认使用中文。具体使用方法如下：

## 使用方法

### 多语言切换

```javascript
import Vue from 'vue';
// Vue3 H5
import { Locale } from '@nutui/nutui';
import enUS from '@nutui/nutui/dist/packages/locale/lang/en-US';
// Taro 多端小程序
// import { Locale } from '@nutui/nutui-taro';
// import enUS from '@nutui/nutui-taro/dist/packages/locale/lang/en-US';
Locale.use('en-US', enUS);

// 通过 Locale.merge 方法可以实现文案的修改和扩展，示例如下：
Locale.merge('en-US', {
  confirm: "custom",
  // 修改某个组件内部语言
  shortpassword : {
    title: 'custom',
  }
});
```

## 目前支持的语言:

| 语言         | 文件名 | 版本      |
|--------------|--------|-----------|
| 英语         | en-US  | `v3.1.19` |
| 印度尼西亚语 | id-ID  | `v3.1.21` |
| 泰语         | th-TH  | 等待 PR   |
| 简体中文     | zh-CN  | `v3.1.19` |
| 繁體中文     | zh-TW  | `v3.1.19` |

> 在 [这里](https://github.com/jdf2e/nutui/tree/next/src/packages/locale/lang) 查看所有的语言包源文件。

## 常见问题

### 找不到所需的语言包？

如果上方列表中没有你需要的语言，欢迎给我们提 Pull Request 来增加新的语言包。改动内容可以参考 [语言包](https://github.com/jdf2e/nutui/tree/next/src/packages/locale/lang) 的 PR

### 业务代码如何实现国际化？

可以使用 [vue-i18n](https://github.com/kazupon/vue-i18n) 来实现。