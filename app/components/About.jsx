import React from 'react'

class About extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<div className = "row title-panel">
					<div className = "columns medium-8 small-centered">
						<h3>josh chang</h3>
						<h6>UX Designer & Software Developer</h6>
						<a href=""><i className="mdi mdi-linkedin-box mdi-light mdi-24px"/></a>
						<a href=""><i className="mdi mdi-github-box mdi-light mdi-24px"/></a>
					</div>
				</div>
				<div className = "row text-center panel">
					<h3>career highlights</h3>
					<div className = "columns medium-3">
						<h1><i className="mdi mdi-briefcase"/></h1>
						<h5>2015 - Joined HP Enterprise</h5>
						<h6 className="emph">Software Developer Intern</h6>
						<p className="ital"><span>Full Stack Developer</span></p>
					</div>
					<div className = "columns medium-3">
						<h1><i className="mdi mdi-school"/></h1>
						<h5>2016 - Graduated</h5>
						<h6 className="emph">National Taiwan University</h6>
						<p className="ital"><span>B.S., Computer Science and Information Engineering</span></p>
					</div>
					<div className = "columns medium-3">
						<h1><i className="mdi mdi-school"/></h1>
					</div>
					<div className = "columns medium-3">
						<h1><i className="mdi mdi-briefcase"/></h1>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = About;