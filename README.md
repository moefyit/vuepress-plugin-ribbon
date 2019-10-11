# vuepress-plugin-ribbon

效果展示: [www.sigure.xyz](https://www.sigure.xyz/)

> 由于是第一次写前端这种项目，大多是直接参考其余几个项目完成的，欢迎大家提出改进意见~

## 安装

``` bash
yarn add vuepress-plugin-ribbon -D
```

## 简单使用

``` javascript
module.exports = {
  plugins: ['ribbon']
}
```

## 更多选项

``` js
module.exports = {
  plugins: ['ribbon', {
    size: 90,     // 彩带的宽度，默认为 90
    opacity: 0.3, // 彩带的不透明度，默认为 0.3
    zIndex: -1    // 彩带的 z-index 属性，默认为 -1
  }]
}
```

## 参考

- [vuepress-plugin-nest](https://github.com/vxhly/vuepress-plugin-nest)
- [canvas-nest.js](https://github.com/hustcc/canvas-nest.js)
- [ribbon.js](https://github.com/hustcc/ribbon.js)
