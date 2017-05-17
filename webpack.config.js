var webpack = require('webpack');

module.exports = {
	entry: [
		'script-loader!jquery/dist/jquery.min.js',
		'script-loader!foundation-sites/dist/js/foundation.min.js',
		// 'script-loader!motion-ui/dist/motion-ui.min.js',
		'./app/app.jsx'
	] ,
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			applicationStyles: 'app/styles/app.scss',
			NavBar: 'app/components/NavBar.jsx',
			Footer: 'app/components/Footer.jsx',
			About: 'app/components/About.jsx',
			Blog: 'app/components/Blog.jsx',
			Portfolio: 'app/components/Portfolio.jsx',
			ModalTemplate: 'app/components/ModalTemplate.jsx'
		},
		extensions: ['*', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules | bower_components)/
			},
			{
				test: /\.(gif|eot|woff|woff2|ttf|svg|png|jpg)$/,
				loader: 'url-loader?limit=10000000&name=[name]-[hash].[ext]'
			}
		]
	},
	devtool: 'cheap-module-eval-source-map'
};