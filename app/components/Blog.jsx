import React from 'react'

export default class Blog extends React.Component {
	componentDidMount() {

	}
	render() {
		return (
			<div className = "row">
				<div className = "columns medium-10 small-centered">
					<h1 className="page-title">fluff and stuff</h1>
					<ul className="cbp_tmtimeline">
						<li>
							<time className="cbp_tmtime" dateTime="2013-04-10 18:30"><span>4/10/13</span> <span>18:30</span></time>
							<div className="cbp_tmicon cbp_tmicon-phone"></div>
							<div className="cbp_tmlabel">
								<h2>Ricebean black-eyed pea</h2>
								<p>Winter purslane...</p>
							</div>
						</li>
						<li>
							<time className="cbp_tmtime" dateTime="2013-04-11T12:04"><span>4/11/13</span> <span>12:04</span></time>
							<div className="cbp_tmicon cbp_tmicon-screen"></div>
							<div className="cbp_tmlabel">
								<h2>Greens radish arugula</h2>
								<p>Caulie dandelion maize...</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
