var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:{
      bundle:['./src/index.js','./src/css/style.scss']
      //"notosans":'./src/css/notosans.scss'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },

    devServer: {
        hot:true,
        inline: true,
        port: 25252,
        contentBase: __dirname + '/dist/',
        historyApiFallback: true
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                },
                {
                  test: /\.scss$/,
                  loader: ExtractTextPlugin.extract({fallback:"style-loader",use: "css-loader!sass-loader"})

                },
                {
                  test: /\.css$/,
                  loader: 'style!css'
                },
                {
                  test:/\.json$/,
                  loader:'json'
                },
                {
                  test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
                  loader: 'file',
                  options: {
                    name: 'fonts/[name].[ext]',
                  },
                }
            ]
        },
    resolveLoader: {
      moduleExtensions: ["-loader"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css")
    ]
};
