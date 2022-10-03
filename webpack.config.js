const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
        // inline:true,
        // hot:true,
        // devtool:'eval',
        // contentBase:'app/ui/www'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
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