const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js',
        pageLoad: './src/pageLoad.js',
        about: './src/about.js',
        contact: './src/contact.js' 
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
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'],
            
        }),
        new HtmlWebpackPlugin({
            title: 'About Us',
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['about'],
           
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Us',
            template: './src/contact.html',
            filename: 'contact.html',
            chunks: ['contact'],
           
        }),
    ]
        
};