/**
 * Created by liuhuizhi on 15/12/6.
 */

var path = require('path')

var HtmlwebpackPlugin = require('html-webpack-plugin')

//var ServerwebpackPlugin = require('webpack-dev-server')

var ROOT_PATH = path.resolve(__dirname)

var SRC_PATH = path.resolve(ROOT_PATH,'src')

var BUILD_PATH = path.resolve(ROOT_PATH,'build')


module.exports = {
    entry: SRC_PATH,

    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    plugin: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],

    //
    //devServer: {
    //    historyApiFallback: true,
    //    hot: true,
    //    inline: true,
    //    progress: true,
    //},
}