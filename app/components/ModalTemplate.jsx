import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

class ModalTemplate extends React.Component {
	componentDidMount() {
		var modalMarkup = (
			<div className="full reveal text-center" id="exampleModal1" data-reveal data-animation-in="fade-in" data-animation-out="fade-out">
				<h1>Awesome. I Have It.</h1>
				<p className="lead">Your couch. It is mine.</p>
				<p>Im a cool paragraph that lives inside of an even cooler modal. Wins!</p>
				<button className="close-button" data-close="" aria-label="Close modal" type="button">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#exampleModal1'));
		modal.open();
	}
	render() {
		return (
			<div>
			</div>
		);
	}
}

module.exports = ModalTemplate;