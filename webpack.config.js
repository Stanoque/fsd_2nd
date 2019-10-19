const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js'    
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
            test: /\.css$/,
            loader: 'css-loader',
        },
        ]
    },
    devServer: {
        overlay: true
    }
}