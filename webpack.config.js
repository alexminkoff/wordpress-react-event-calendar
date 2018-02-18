const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

/*
** Config
*/

const env = require('./env.json');

/*
** JavaScript Bundle
*/

const jsConfig = {
	entry: {
		'public': './src/js/public.js',
		'admin': './src/js/admin.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'env']
					}
				}
			},
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'assets'),
		publicPath: env.publicPath
	},
	devServer: {
		host: env.hostname,
		proxy: {
			'/**': {
				target: env.url,
				secure: false
			}
		}
	}
};

/*
** CSS Bundle
*/

const cssConfig = {
	entry: {
		'public': './src/css/public.scss',
		'admin': './src/css/admin.scss'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								plugins: [
									require('autoprefixer')(),
									require("css-mqpacker")()
								]
							}
						},
						'sass-loader'
					]
				})
			},
			{
				test: /\.(png|jpg|woff|woff2|eot|ttf)$/,
				loader: 'file-loader',
				query: {
					publicPath: env.publicPath
				}
			}
		]
	},
	output: {
		filename: '[name].css',
		path: path.join(__dirname, 'assets'),
		publicPath: env.publicPath
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	]
};

module.exports = [jsConfig, cssConfig];
