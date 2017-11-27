const webpack = require('webpack');
const path = require('path');

const config = {
	//入口
	context: __dirname + '/src',	//全局状态下的目录
	entry: './js/index.js',
	//
	module: {
		loaders: [
			//js的loader
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
					//plugins: ['react-html-attrs']	//添加组件的插件配置
				},
			},

			//js的loader
			/*{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				
				options:{
					presets: ['react', 'es2015'],
					plugins: [

						['import', {libraryName: 'antd', style: 'css'}]
					],
					
				},
			},*/
			//css的loader，也就是css模块化的配置方法
			/*{
				test: /\.css$/,
				//use: ['style-loader', 'css-loader']
				//loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]'
			},*/
			// antd css配置文件
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			/*derServer: {
				historyApiFllback: true,
				satic: 
				proxy: {
					
				}
			}
*/
		]
	},
	//出口
	output: {
		path: __dirname +　"/src/",
		filename: 'bundle.js'
	}
};

module.exports = config;


