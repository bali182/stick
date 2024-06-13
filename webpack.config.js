const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main'),
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts', '.scss'],
  },
  plugins: [
    new HtmlPlugin({
      template: 'src/index.html',
    }),
  ],
}
