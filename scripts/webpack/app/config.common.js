const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');

const styledComponentsTransformer = createStyledComponentsTransformer();
const rootDir = path.resolve(__dirname, '../../../');
const source = path.join(rootDir, 'src');
const distribution = path.join(rootDir, 'dist');

const isProd = process.env.NODE_ENV === 'production';

module.exports = merge({
  entry: [path.join(source, 'app/index.tsx')],
  output: {
    path: path.join(distribution, 'app'),
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: './template.html',
    }),
    isProd &&
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
  ].filter(Boolean),
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(svg|jpg|png)$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        include: [source],
        use: [
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
