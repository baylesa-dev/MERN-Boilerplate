var merge = require('webpack-merge')

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
var Visualizer = require('webpack-visualizer-plugin')

var baseConfig = require('./webpack.base.config')

const prodConfiguration = env => {
    return merge([
        {
            optimization: {
                minimizer: [new UglifyJsPlugin()],
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin(),
                new Visualizer({ filename: './statistics.html' })
            ],
        },
    ]);
}

module.exports = env => {
    return merge(baseConfig(env), prodConfiguration(env))
}