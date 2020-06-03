const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  mode: 'production',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};