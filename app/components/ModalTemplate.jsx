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
				<a onClick={this.handleOpenModal}><img src={require('../assets/Color1.png')}/></a>
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
						<div className = "columns medium-8 small-centered modal-panel text-center">
							<h1>Project 1</h1>
						</div>
					</div>
				</ReactModal>
			</div>
		)
	}
}
