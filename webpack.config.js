/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  performance: {
    maxEntrypointSize: 1000000,
  },
  entry: {
    popup: path.resolve(__dirname, './src', 'popup', 'index.tsx'),
    content: path.resolve(__dirname, './src', 'content', 'index.tsx'),
    background: path.resolve(__dirname, './src', 'background', 'index.tsx'),
    options: path.resolve(__dirname, './src', 'options', 'index.tsx'),
    tabs: path.resolve(__dirname, './src', 'tabs', 'index.tsx'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.js', '.tsx'],
    fallback: {
      'stream': require.resolve('stream-browserify'),
      'buffer': require.resolve('buffer/'),
      'http': require.resolve('stream-http'),
      "url": require.resolve("url/"),
      "https": require.resolve("https-browserify"),
      "timers": require.resolve("timers-browserify"),
    },
    alias: {
      '~common': path.resolve(__dirname, './src', './common'),
      '~assets': path.resolve(__dirname, './assets'),
    },
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          'limit': 40000
        }
      },
    ]
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'assets',
          to: '',
        },
      ],
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require('./assets/manifest.json').version)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src', 'popup', 'index.html'),
      filename: 'popup.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src', 'options', 'index.html'),
      filename: 'options.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src', 'background', 'index.html'),
      filename: 'background.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src', 'tabs', 'index.html'),
      filename: 'tabs.html',
      inject: false,
    }),
  ]
};
