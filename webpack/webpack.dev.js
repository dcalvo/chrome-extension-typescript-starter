const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")
const srcDir = path.join(__dirname, "..", "src/")

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    hot_reload: path.join(srcDir + "hot_reload.ts"),
  },
})
