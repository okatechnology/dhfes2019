const webpack = require('webpack');
const common = require('./config.common');
const merge = require('webpack-merge');
const path = require('path');

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

const pages = new Set();

/**
 * @param {string} p
 */
const pathConverter = (p) => {
  if (p === '/favicon.ico') return false;
  const fallthrough = ['.hot-update.json'].some((str) => p.endsWith(str));
  const isRoot = /^\/$/.test(p);
  if (!p || isRoot || fallthrough) return false;

  const { ext, base } = path.parse(p);
  const isPage = p.endsWith('/') || !ext;
  if (isPage) {
    pages.add(p.replace(/([^/])$/, '$1/'));
    return '/';
  }
  const dirname = Array.from(pages.values()).find((page) => p.startsWith(page));
  if (dirname) {
    return `/${p.slice(dirname.length)}`;
  }

  return `/${base}`;
};

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
    proxy: {
      context: (p) => Boolean(pathConverter(p)),
      pathRewrite: (p) => pathConverter(p),
      target: `http://${HOST}:${PORT}`,
    },
  },
});
