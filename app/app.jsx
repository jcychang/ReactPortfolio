import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from 'NavBar'
import About from 'About'
import Portfolio from 'Portfolio'
import Blog from 'Blog'
import Footer from 'Footer'

// Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!motion-ui/dist/motion-ui.min.css');
require('style-loader!css-loader!slick-carousel/slick/slick.css');
require('style-loader!css-loader!slick-carousel/slick/slick-theme.css');
require('style-loader!css-loader!mdi/css/materialdesignicons.min.css');
$(document).ready(function(){
	$(document).foundation();
});

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');
require('style-loader!css-loader!sass-loader!timelineStyles');

ReactDOM.render (
	<Router>
		<div>
			<NavBar/>
			<Route exact path="/" component={Portfolio}/>
			<Route path="/about" component = {About}/>
			<Route path="/blog" component = {Blog}/>
			<Footer/>
		</div>
	</Router>,
	document.getElementById('app')
);
