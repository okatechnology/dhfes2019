const webpack = require('webpack');
const common = require('./webpack.common');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'development',
      },
    }),
    new TerserPlugin({
      sourceMap: false,
      parallel: true,
      terserOptions: {
        ecma: 7,
        ie8: false,
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
        },
      },
    }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
  ],
});
