module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.sass$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }
};
  
  