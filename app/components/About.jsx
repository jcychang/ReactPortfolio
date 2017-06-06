import React from 'react'

export default class About extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<div className = "row title-panel">
					<div className = "columns medium-8 small-centered">
						<h2>Josh Chang</h2>
						<h5>UX Designer & Software Developer</h5>
						<a href=""><i className="mdi mdi-linkedin-box mdi-light mdi-36px"/></a>
						<a href=""><i className="mdi mdi-github-box mdi-light mdi-36px"/></a>
					</div>
				</div>

				<div className = "row text-center panel-center-align">
					<div className = "columns medium-12">
						<h3>Career Highlights</h3>
						<hr/>
					</div>
					<div className = "columns medium-3">
						<i className="mdi mdi-briefcase"/>
						<h5>2015 - Joined HP Enterprise</h5>
						<h6 className="emph">Hewlett-Packard Enterprise</h6>
						<p className="ital"><span>Software Developer</span></p>
					</div>
					<div className = "columns medium-3">
						<i className="mdi mdi-school"/>
						<h5>2016 - Graduated</h5>
						<h6 className="emph">National Taiwan University</h6>
						<p className="ital"><span>Bachelor of Science</span></p>
					</div>
					<div className = "columns medium-3">
						<i className="mdi mdi-school"/>
						<h5>2017 - Master's Candidate</h5>
						<h6 className="emph">University of Maryland</h6>
						<p className="ital"><span>Master of Science</span></p>
					</div>
					<div className = "columns medium-3">
						<i className="mdi mdi-briefcase"/>
						<h5>2017 - Joined Division of IT</h5>
						<h6 className="emph">UMD Division of IT</h6>
						<p className="ital"><span>Web & Media Designer</span></p>
					</div>
				</div>

				<div className = "row panel-left-align">
					<div className = "columns medium-6 exp-panel">
						<h4>Experience</h4>
						<hr/>
						<ul className = "no-bullet">
							<li className="larger">Vistaprint Digital</li>
							<li className="emph">Software Engineering Intern</li>
							<li><span>June '17 - Present</span></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Division of Information Technology, UMD</li>
							<li className="emph">Web & Media Designer</li>
							<li><span>Sept '16 - May '17</span></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Hewlett-Packard Enterprise</li>
							<li className="emph">Software Developer</li>
							<li><span>Aug '15 - Jun '16</span></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Image Lab, NTU</li>
							<li className="emph">Research Assistant</li>
							<li><span>Dec '14 - Jun '16</span></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Mobile and Human Computer Interaction Lab, NTU</li>
							<li className="emph">Research Assistant</li>
							<li><span>Jun '15 - Jun '16</span></li>
						</ul>
					</div>

					<div className = "columns medium-6">
						<h4>Education</h4>
						<hr/>
						<ul className = "no-bullet">
							<li className="larger">Master's in Human Computer Interaction</li>
							<li className="emph">University of Maryland, College Park</li>
							<li><span>Expected May '18</span></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">B.S., Computer Science and Information Engineering</li>
							<li className="emph">National Taiwan University</li>
							<li><span>Graduated Jun '16</span></li>
						</ul>
						<br/>
						<h4>Publications & Awards</h4>
						<hr/>
						<ul className = "no-bullet">
							<li className="larger">Vibroplay: Authoring Three-Dimensional Spatial-Temporal Tactile Effects with Direct Manipulation</li>
							<li className="emph">SIGGRAPH Asia 2016, Emerging Technologies</li>
							<li><span>Expected May '18</span></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">B.S., Computer Science and Information Engineering</li>
							<li className="emph">National Taiwan University</li>
							<li><span>Graduated Jun '16</span></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
