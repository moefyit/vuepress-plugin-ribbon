# vuepress-plugin-ribbon

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-ribbon.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-ribbon/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/SigureMo/vuepress-plugin-ribbon"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-ribbon.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-ribbon.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-ribbon/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/SigureMo/vuepress-plugin-ribbon"></a>
</p>

- Website: [www.sigure.xyz/vuepress-lovely-plugins/](https://www.sigure.xyz/vuepress-lovely-plugins/)
- MyBlog: [www.sigure.xyz](https://www.sigure.xyz/)

## Install

``` bash
yarn add vuepress-plugin-ribbon -D
# or use npm
npm i vuepress-plugin-ribbon -D
```

## Usage

``` javascript
module.exports = {
  plugins: ['ribbon']
}
```

## Options

``` js
module.exports = {
  plugins: [
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ]
  ]
}
```

## Thanks

- [vuepress-plugin-nest](https://github.com/vxhly/vuepress-plugin-nest)
- [canvas-nest.js](https://github.com/hustcc/canvas-nest.js)
- [ribbon.js](https://github.com/hustcc/ribbon.js)
