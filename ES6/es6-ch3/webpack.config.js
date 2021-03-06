const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('babel-register')

module.exports = {
    entry: ['@babel/polyfill', './src/oop.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        contentBase: './dist'
    }
}