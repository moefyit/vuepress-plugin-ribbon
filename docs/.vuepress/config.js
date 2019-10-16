module.exports = {
  title: "vuepress-plugin-ribbon",
  description: "A vuepress plugin for canvas-nest.js",
  base: "/vuepress-plugin-ribbon/",
  head: [
    ["link", { rel: "icon", href: "/ribbon.png" }]
  ],

  plugins: [
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: 0    // z-index property of the background, default: -1
      }
    ]
  ],

  themeConfig: {
    repo: "SigureMo/vuepress-plugin-ribbon",
    docsDir: "docs",
    docsBranch: "master"
  }
};
