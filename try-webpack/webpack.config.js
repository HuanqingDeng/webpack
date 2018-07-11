const path = require('path')
const webpack = require ('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// console.log(path.resolve(__dirname,'dist'));
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname,'src')
                ],
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader']
                })
                    
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {loader: 'file-loader'}
                ]
            }
        ]
    },
    resolve: {
        alias: {
            utils: path.resolve(__dirname,'src/utils')
        },
        extensions:['.js','.json','.css','.less']
    },
    plugins: [
        new HtmlWebpackPlugin({
            flie: 'index.html',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([
            { from: 'src/assets/favicon.ico',to: 'favicon.ico'}
        ]),
        new webpack.ProvidePlugin({
            '_': 'lodash'
        })
    ],
    devServer: {
        port: '1314',
        before(app) {
            app.get('/api/test.json',(req,res)=>{
                res.json({
                    code:200,
                    message: 'hello world'
                })
            })
        }
    }
}
