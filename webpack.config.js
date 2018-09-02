const webpack = require('webpack');
const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist/');

module.exports = {
  target: 'web',
  context: src,
  entry: 'app.js',
  output: {
    path: dist,
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['*', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.js(x?)$/,
        exclude: /(node_modules)/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
  devtool: 'source-map',
};
