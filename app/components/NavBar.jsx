var React = require('react');
var {NavLink} = require('react-router-dom');

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<div className = "title-bar" ref="menu_title" data-responsive-toggle="navbar-menu" data-hide-for="medium">
					<button className="menu-icon" type="button" data-toggle="navbar-menu"></button>
				</div>
				<div className = "top-bar" id="navbar-menu" data-animate="hinge-in-from-top hinge-out-from-top">
					<div className = "top-bar-left">
						<ul className = "menu">
							<li className = "menu-text">josh<span>chang</span></li>
							<li>
								<NavLink exact to = "/"  activeClassName = "active-link" activeStyle={{fontWeight: 'bold'}}>portfolio</NavLink>
							</li>
							<li>
								<NavLink exact to = "/about" activeClassName = "active-link" activeStyle={{fontWeight: 'bold'}}>about</NavLink>
							</li>
							<li>
								<NavLink exact to = "/blog"  activeClassName = "active-link" activeStyle={{fontWeight: 'bold'}}>blog</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
};

module.exports = NavBar;
