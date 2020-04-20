const path = require('path');
//npm install -D html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin')
//npm install -D clean-webpack-plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry:{
    main: path.resolve(__dirname,'web/js/App.js')
  },
  output:{
    filename: '[name].[contenthash].js',  
    path: path.resolve(__dirname,'web/dist')
  },
  plugins:[
    new HTMLWebpackPlugin({
        filename: path.resolve(__dirname,'web/index.html'),//путь к файлу web/index.html
        template: path.resolve(__dirname,'web/template/index.html')// шаблон, по которому будет строиться web/index.html
    }),
    new CleanWebpackPlugin()
  ]
  
}


