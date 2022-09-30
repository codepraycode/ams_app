const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:"./src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.[contenthash].js",
        clean: true,
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
    ],
}