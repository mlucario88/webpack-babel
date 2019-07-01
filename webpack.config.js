const path = require('path');
// ! __dirname : Will get direction of folder
module.exports = {
  devServer: {
    //   ! dist the final folder keep js file
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    compress: true,
    port: 9000,
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  //   * Need to set some rules ..
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
