'use strict'
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

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
  }
}
