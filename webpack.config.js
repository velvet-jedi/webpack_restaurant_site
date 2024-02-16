const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js',
        pageLoad: './src/pageLoad.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                type: 'asset/resource',
              },
        ],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Order Food Quicker',
            template: './src/index.html'
        })
    ]
        
};