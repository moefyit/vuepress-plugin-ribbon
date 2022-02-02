const { resolve } = require('path')

module.exports = (options = {}, context) => ({
  define() {
    const { size = 90, opacity = 0.3, zIndex = -1 } = options

    return {
      RIBBON_SIZE: size,
      RIBBON_OPACITY: opacity,
      RIBBON_Z_INDEX: zIndex,
    }
  },

  enhanceAppFiles: resolve(__dirname, './lib/enhanceAppFile.js'),
  globalUIComponents: 'Ribbon',
})
