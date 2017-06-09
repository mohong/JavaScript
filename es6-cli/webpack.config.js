var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		main: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'js/[name].js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
		        test: /\.js$/,
		        use: 'babel-loader'
	        },
	        {
	        	test: /\.css$/,
	        	use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
	        }
        ]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: 'index.html'
		}),
		new ExtractTextPlugin("[name].css")
	],
	devServer: {
	  	contentBase: path.join(__dirname, "dist"),
	  	compress: true,
	  	port: 9000
	}
}
