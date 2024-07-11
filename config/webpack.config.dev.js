'use strict';

const webpack              = require('webpack');
const merge                = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const helpers              = require('./helpers');
const commonConfig         = require('./webpack.config.common');
const environment          = require('./env/dev.env');
const isDevMode = true

const webpackConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        host: isDevMode ? 'localhost' : '192.168.0.100',
        // allowedHosts: [
        //     'localhost',
        //     '192.168.1.123',
        //     '192.168.1.4'
        // ],
        port: 8000,
        stats: 'errors-only',
        clientLogLevel: 'error'
    }
});

module.exports = webpackConfig;
