import React from 'react'
import ReactDOM from 'react-dom'
import { RouteTransition } from 'react-router-transition';
import { HashRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'
import Footer from './components/Footer'

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
	<HashRouter>
		<div>
			<NavBar/>
			<Route path="/" exact component={Portfolio}/>
			<Route path="/about" exact component={About}/>
			<Route path="/blog" exact component={Blog}/>
			<Footer/>
		</div>
	</HashRouter>,
	document.getElementById('app')
);
