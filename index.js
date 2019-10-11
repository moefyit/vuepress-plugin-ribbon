const {
  resolve
} = require('path')

module.exports = (options = {}, context) => ({
  define() {
    const {
      size = 90, opacity = 0.3, zIndex = -1
    } = options

    return {
      SIZE: size,
      OPACITY: opacity,
      Z_INDEX: zIndex
    }
  },

  enhanceAppFiles: resolve(__dirname, "enhanceAppFile.js"),
  globalUIComponents: "Ribbon"
});
