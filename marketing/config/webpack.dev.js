const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const path = require("path");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8081,
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
