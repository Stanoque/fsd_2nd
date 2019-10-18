const path = require('path');
const html_webpack = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge ([
    { 
        entry: {
            'landing': PATHS.source + '/pages/landing.pug',
            'room': PATHS.source + '/pages/room.pug',
            'search': PATHS.source + '/pages/search.pug'
        },
        output: {
            path: PATHS.build,
            filename: '[name].js'
        },
        plugins: [
            new html_webpack({
                filename: 'landing.html',
                template: PATHS.source + '/pages/landing.pug'
            }),
            new html_webpack({
                filename: 'room.html',
                template: PATHS.source + '/pages/room.pug'
            }),
            new html_webpack({
                filename: 'search.html',
                template: PATHS.source + '/pages/search.pug'
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
            devserver(),
            sass()
        ])
    }
};