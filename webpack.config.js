const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.jpg$/, use: 'file-loader'},
      { test: /\.svg$/, use: 'file-loader'}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
}
