let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  devServer: {
    port: 8080,
    proxy: {
      '/': 'http://[::1]:3000/',
      "changeOrigin": true,
      secure: false,
      // pathRewrite: { '^/api': '' }
    }
  }
}
