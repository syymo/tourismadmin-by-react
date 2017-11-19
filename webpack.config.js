const webpack = require('webpack');
const path = require('path');

const config = {
	//入口
	context: __dirname + '/src',	//全局状态下的目录
	entry: './js/index.js',
	//
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}

		}]
	},
	//出口
	output: {
		path: __dirname +　"/src/",
		filename: 'bundle.js'
	}
};

module.exports = config;