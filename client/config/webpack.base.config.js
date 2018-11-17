const path = require('path')
const webpack = require('webpack')
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')

const APP_DIR = path.resolve(__dirname, '../src/index.js')
const sourcePath = path.join(__dirname, '../src')

module.exports = env => {
    const { PLATFORM, VERSION } = env
    return merge([
        {
            context: sourcePath,
            entry: ['@babel/polyfill', APP_DIR],
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        }
                    },
                    {
                        test: /\.html$/,
                        use: [
                            {
                                loader: "html-loader",
                                options: { minimize: true }
                            }
                        ]
                    },
                    {
                        test: /\.scss$/,
                        use: [
                            PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    }
                ]
            },
            plugins: [
                new CopyWebpackPlugin([
                    { from: './index.html' }
                ]),
                new webpack.HotModuleReplacementPlugin(),
                new HtmlWebpackPlugin({
                    template: 'index.html',
                }),
                new webpack.DefinePlugin({
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
                }),
            ],
            devServer: {
                contentBase: sourcePath,
                hot: true,
                proxy: {
                  '/api': 'http://server:8080'
                }
            },
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    ])
}