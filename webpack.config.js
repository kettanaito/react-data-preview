const path = require('path');
const webpack = require('webpack');

const PRODUCTION = (process.env.NODE_ENV === 'production');

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'web',
  entry: {
    index: path.resolve(__dirname, 'src/index.jsx')
  },
  externals: {
    react: 'umd react'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    library: 'reactDataPreview',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_module/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
