const path = require('path');
const html_webpack = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge ([
    { 
        entry: './index.js',
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new html_webpack({
            template: './index.pug',
        })
        ]
    },
   
    pug()
])


module.exports = function(env) {
    if (env === 'production'){
        return common;
    }
    if (env == 'development'){
        return merge([
            common,
            devserver()
        ])
    }
};