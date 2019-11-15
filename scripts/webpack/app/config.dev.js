const webpack = require('webpack');
const common = require('./config.common');
const merge = require('webpack-merge');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devServer: {
    host: HOST,
    port: PORT,
    hot: true,
    historyApiFallback: true,
  },
});
