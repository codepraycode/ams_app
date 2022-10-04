const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:"./src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.[contenthash].js",
        clean: true,
        publicPath:'/'
    },
    devtool: "source-map",
    devServer:{
        historyApiFallback:true,
        port:3090,
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/, ///\.(js|jsx)$/,
                exclude: [/node_modules/, /public/],
                use: {
                    loader: "babel-loader",
                },
                
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", 'sass-loader',],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),

        new CopyPlugin({
            patterns: [
                { from: 'public/assets', to: '../build/assets' },
            ],
        })
    ],
}