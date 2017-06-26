const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src', 'components'),
            Redux: path.resolve(__dirname, 'src', 'redux'),
        },
        extensions: [ '.jsx', '.js', '.json' ]
    },
    entry: './entry',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].bundle.js'
    },
    resolveLoader: {
        moduleExtensions: [ '-loader' ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', 
                query: {
                    presets: ['react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlPlugin({
            template: path.resolve(__dirname, 'public', 'template.html')
        })
    ]
}