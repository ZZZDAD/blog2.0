const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const vueLoaderConfig = require('./vue-loader.config')
const {
  VueLoaderPlugin
} = require('vue-loader')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devtool: isProd ?
    false : '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      '@': path.resolve(__dirname, '../src')
    }
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'Axios',
    'element-ui': 'ELEMENT',
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|woff|woff2|wtf|ttf)/,
        use: 'url-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.less$/,
        use: isProd ?
          ExtractTextPlugin.extract({
            use: [{
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              'less-loader'
            ],
            fallback: 'vue-style-loader'
          }) : ['vue-style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false
  },
  plugins: isProd ? [
    new VueLoaderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css'
    })
  ] : [
    new VueLoaderPlugin(),
    new FriendlyErrorsPlugin()
  ]
}