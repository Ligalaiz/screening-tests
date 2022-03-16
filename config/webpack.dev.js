const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { join } = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const root = join(__dirname, '../');

module.exports = merge(common, {
  mode: 'development',
  name: 'client',
  devtool: 'inline-source-map',

  output: {
    path: join(root, 'dist'),
    filename: '[name].[hash:10].js',
    chunkFilename: '[name].[hash:10].js',
    assetModuleFilename: 'assets/[name].[hash:10].[ext]',
    publicPath: '/',
  },

  devServer: {
    hot: true,
    open: 'true',
    port: 3000,
    historyApiFallback: true,
    contentBase: join(root, 'dist'),
  },

  // plugins: [new BundleAnalyzerPlugin()],

  plugins: [new ReactRefreshWebpackPlugin()],

  stats: {
    errorDetails: true,
  },
});
