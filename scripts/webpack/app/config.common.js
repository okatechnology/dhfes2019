const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');

const styledComponentsTransformer = createStyledComponentsTransformer();
const rootDir = path.resolve(__dirname, '../../../');
const source = path.join(rootDir, 'src');
const distribution = path.join(rootDir, 'dist/app');

const isProd = process.env.NODE_ENV === 'production';

module.exports = merge({
  entry: [path.join(source, 'app/index.tsx')],
  output: {
    path: distribution,
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '/app/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: './template.html',
    }),
    new WebpackPwaManifest({
      name: 'デジハリ祭2019｜デジタルハリウッド大学の学園祭',
      short_name: 'デジハリ祭2019',
      description:
        '今年度もデジタルハリウッド大学の学園祭「デジハリ祭」が開催されます。学祭実行委員を中心に、各サークル、部活、ゼミ、大学院の有志や教職員まで、飲食、展示、物販、体験、演出等、さまざまなブースをご用意して皆様のご来場をお待ちしております。',
      background_color: '#000B60',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/app/assets/small-logo.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: distribution + '/sw.js',
      clientsClaim: true,
      skipWaiting: true,
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
