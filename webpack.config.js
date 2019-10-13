const path = require('path');
const html_webpack = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: 'index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new html_webpack({
            title: 'FSD Second Step'
        })
    ]
};