const webpack = require('webpack');

const IMAGES_RULES = {
    test: /\.(png|gif|jpg|svg)/,
    use: {
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: '[name].[ext]'
        }
    }
};

const FONT_RULES = {
    test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
    use: {
        loader: "file-loader",
        options: {
            limit: 50000,
            name: '[name].[ext]',
            esModule: false,
        }
    },
};

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('build'),
        publicPath: '/'
    },
    module: {
        rules: [
            IMAGES_RULES,
            FONT_RULES,
        ]
    },
    plugins: [
    ],
};
