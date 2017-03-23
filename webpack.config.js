const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.js']
    },
    stats: {
        colors: true,
        reasons: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    "babel-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss|sass)$/,
                loader: 'style-loader!css-loader!sass-loader',
            },
        ],
    },
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};