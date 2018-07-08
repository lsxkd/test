'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

//mock数据
const express = require("express")

//创建express实例
const app = express()

//引入数据
var movie_now = require("../data/movie_now.json")
var movie_will = require("../data/movie_will.json")
var movie_will_hot = require("../data/movie_will_hot.json")
var cinema = require("../data/cinema.json")
var filter_cinemas = require("../data/filter_cinemas.json")
var cities = require("../data/cities.json")  
var my_order_list = require("../data/my_order_list.json")
var my_coupon_list = require("../data/my_coupon_list.json")
var detail_movie = require("../data/detail_movie.json")
var comment_list = require("../data/comment_list.json")
var cinema_detail = require("../data/cinema_detail.json")



const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    //接口引入
    before(app){
      app.get('/api/movie_now',(req,res) => {
        res.json(movie_now)
      })
      app.get('/api/movie_will',(req,res) => {
        res.json(movie_will)
      })
      app.get('/api/movie_will_hot',(req,res) => {
        res.json(movie_will_hot)
      })
      app.get('/api/cinema',(req,res) => {
        res.json(cinema)
      })
      app.get('/api/filter_cinemas',(req,res) => {
        res.json(filter_cinemas)
      })
      app.get('/api/cities',(req,res) => {
        res.json(cities)
      })
      app.get('/api/my_order_list',(req,res) => {
        res.json(my_order_list)
      })
      app.get('/api/my_coupon_list',(req,res) => {
        res.json(my_coupon_list)
      })
      app.get('/api/detail_movie',(req,res) => {
        res.json(detail_movie)
      })
      app.get('/api/comment_list',(req,res) => {
        res.json(comment_list)
      })
      app.get('/api/cinema_detail',(req,res) => {
        res.json(cinema_detail)
      })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
