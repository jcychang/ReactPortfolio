import React from 'react'

export default class About extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<div className = "row row-100 title-panel">
					<div className = "columns medium-6 small-centered">
						<h2>Josh Chang</h2>
						<h5>UX Designer & Software Developer</h5>
						<a href="https://www.linkedin.com/in/chiun-yao-josh-chang-613139127"><i className="mdi mdi-linkedin-box mdi-light mdi-36px"/></a>
						<a href="https://github.com/jcychang"><i className="mdi mdi-github-box mdi-light mdi-36px"/></a>
					</div>
				</div>

				<div className = "row text-center panel-center-align">
					<div className = "columns medium-12">
						<h3>Career Highlights</h3>
					</div>
					<div className = "columns medium-3">
						<img src={require('../assets/AboutIcons/HPEIcon.png')}/>
						<h5>2015 - Started Work</h5>
						<h6 className="emph">Hewlett-Packard Enterprise</h6>
						<p className="ital"><span>Software Developer</span></p>
					</div>
					<div className = "columns medium-3">
						<img src={require('../assets/AboutIcons/NTUIcon.png')}/>
						<h5>2016 - Graduated</h5>
						<h6 className="emph">National Taiwan University</h6>
						<p className="ital"><span>Bachelor of Science</span></p>
					</div>
					<div className = "columns medium-3">
						<img src={require('../assets/AboutIcons/DITIcon.png')}/>
						<h5>2017 - Started Work</h5>
						<h6 className="emph">UMD Division of IT</h6>
						<p className="ital"><span>Web & Media Designer</span></p>
					</div>
					<div className = "columns medium-3">
						<img src={require('../assets/AboutIcons/VistaprintIcon.png')}/>
						<h5>2017 - Started Work</h5>
						<h6 className="emph">Vistaprint Digital</h6>
						<p className="ital"><span>Software Engineering Intern</span></p>
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
							<ul>
								<li>Front-end UX design and development of customer-facing applications</li>
								<li>Utilized modern web technology stack (React.js, Node.js) and UX design principles</li>
							</ul>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Division of Information Technology, UMD</li>
							<li className="emph">Web & Media Designer</li>
							<li><span>Sept '16 - May '17</span></li>
							<ul>
								<li>Led the rebranding of University of Maryland student-facing academic websites</li>
								<li>Completed the end-to-end process of design to development to launch</li>
							</ul>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Hewlett-Packard Enterprise</li>
							<li className="emph">Software Developer</li>
							<li><span>Aug '15 - Jun '16</span></li>
							<ul>
								<li>Developed front and back-end features for internal server virtualization stress testing software</li>
								<li>Ran agile scrum-team and led daily scrums as well as retrospective and planning sessions</li>
							</ul>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Image Lab, NTU</li>
							<li className="emph">Research Assistant</li>
							<li><span>Dec '14 - Jun '16</span></li>
							<ul>
								<li>Explored and implemented interactive systems through the medium of virtual reality</li>
								<li>Designed the interface and developed a system of virtual museum tours for Dunhuang</li>
							</ul>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Mobile and Human Computer Interaction Lab, NTU</li>
							<li className="emph">Research Assistant</li>
							<li><span>Jun '15 - Jun '16</span></li>
							<ul>
								<li>Researched human-centric hardware/software topics and submitted to academic conferences</li>
								<li>Designed user-testing and data gathering methodologies and protocols</li>
							</ul>
						</ul>
					</div>

					<div className = "columns medium-6">
						<h4>Skills</h4>
						<hr/>
						<ul className = "no-bullet">
							<li className="larger">Creative Tools</li>
							<li className="emph"><i>Adobe Suite (Photoshop, Illustrator, Experience Design), Sketch</i>, Axure, Invision</li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Framework/Libraries</li>
							<li className="emph"><strong>Bootstrap</strong>, <i>React, Redux, Node.js, Express.js, Foundation</i></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Programming Languages</li>
							<li className="emph"><strong>HTML/CSS/JS</strong>, <i>Python, JQuery, C#, C/C++</i></li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Project Management</li>
							<li className="emph"><strong>Git</strong>, <i>Agile Methodologies w/ Scrum</i>, Continuous Integration</li>
						</ul>
						<ul className = "no-bullet">
							<li className="larger">Languages</li>
							<li className="emph">Fluent in both English and Mandarin Chinese</li>
						</ul>
						<p className = "foot-note">* Bold: Expert, Italics: Proficient</p>
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
						</ul>
						<ul className = "no-bullet">
							<li className="larger">RealSense: A Better Broadcasting Experience</li>
							<li className="emph">World Finalists, Intel APEC Global Challenge 2015</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
