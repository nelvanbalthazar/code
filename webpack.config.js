var path = require('path');

module.exports = {
    entry: './src/js/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        watchContentBase: true,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public/assets/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
    },
    stats: {
        colors: true
    },
    resolve: {
		unsafeCache: true,
    },
    mode: "development",
    target: 'node', 
    externals: {
        jquery: 'jQuery'
    },
    watchOptions: {
        ignored: /node_modules/
    }
};
