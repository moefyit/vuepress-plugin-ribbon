---
home: true
actionText: Get started!
actionLink: /#get-started
footer: MIT Licensed | Copyright © 2019-present SigureMo
---

# Get Started!

## Install

``` bash
yarn add vuepress-plugin-ribbon -D
# or
npm i vuepress-plugin-nest -D
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
        zIndex: 0    // z-index property of the background, default: -1
      }
    ]
  ]
}
```
