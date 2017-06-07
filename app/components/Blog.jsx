import React from 'react'

export default class Blog extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
			<div className = "row">
				<div className = "columns medium-10 small-centered">
					<h1>fluff and stuff</h1>
					<ul className="cbp_tmtimeline">
						{/* <li>
							<time className="cbp_tmtime" dateTime="2013-04-10 18:30"><span>4/10/13</span> <span>18:30</span></time>
							<div className="cbp_tmicon cbp_tmicon-phone"></div>
							<div className="cbp_tmlabel">
								<h2>Ricebean black-eyed pea</h2>
								<p>Winter purslane...</p>
							</div>
						</li> */}
						<li>
							<time className="cbp_tmtime" dateTime="2017-06-7 00:00"><span>6/7/17</span> <span>00:00</span></time>
							<div className="cbp_tmicon cbp_tmicon-screen"></div>
							<div className="cbp_tmlabel">
								<h2>Relaunched New Website</h2>
								<p>The old site was due for a much needed update, the design sucked, the experience sucked, everything was awful. Utilizing modern technology stack (React.js & Node.js, which admittedly is an incredible overkill) this is an incredible new chapter in both design and development. Check back occasionally for some more fluff and stuff!</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
