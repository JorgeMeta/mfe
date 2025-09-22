const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const path = require("path");
const ModuleFedarationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFedarationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
