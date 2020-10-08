'use strict'
const path = require('path')
const baseSetting = require('./settings')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const name = baseSetting.title || 'H5定制化工具' // page title
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  devServer: {
    port: port,
    open: 'Google Chrome'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = name
        return args
      })
  }
}
