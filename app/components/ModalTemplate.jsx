import React from 'react'
import ReactModal from 'react-modal';

export default class ModalTemplate extends React.Component {
	constructor () {
		super();
		this.state = {
			showModal: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal () {
		this.setState({ showModal: true });
	}

	handleCloseModal () {
		this.setState({ showModal: false });
	}
	render() {
		return (
			<div>
				<a onClick={this.handleOpenModal}><img src={require('../assets/IOTCase/IOTMockup.png')}/></a>
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Minimal Modal Example"
					closeTimeoutMS={500}
					className="modal"
					overlayClassName="overlay"
					onRequestClose={this.handleCloseModal}
					shouldCloseOnOverlayClick={true}
				>
					<button onClick={this.handleCloseModal} className="close-button"><span aria-hidden="true">&times;</span></button>
					<div className = "row modal-content">
						<div className = "columns medium-10 small-centered modal-panel">
							<div className="IOTBanner">
								<h2>WallCom</h2>
								<h3 className="emph">Designing IOT Interactions in Bus Stops</h3>
							</div>
							<h4>Abstract</h4>
							<p>With the concept of internet-of-things becoming more integrated into mainstream technology design, the advent of various IOT devices and interactions is now here. In this project, we conceptualize a potential interaction at bus stops. Users who are at bus stop terminals are able to draw on the blank canvas with various color and brush strokes and can use this as a method of interacting with other users at differing bus stops. Potential exchange of traffic, weather or other information can be easily visualized with simple drawings.</p>
						</div>
					</div>
				</ReactModal>
			</div>
		)
	}
}
