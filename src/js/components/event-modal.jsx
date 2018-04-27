import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';

var classes = new BEMHelper({
	name: 'event-modal',
	prefix: 'wprec-'
});

/** WPREC event modal component */

class EventModal extends Component {

	/**
	* Close the modal.
	*/
	closeModal(e) {
		e.preventDefault();
		this.props.setEvent(null);
	}

	/**
	* Render the modal.
	*/
	render() {
		return (
			<div {...classes()} onClick={this.closeModal.bind(this)}>
				<div {...classes('wrap')}>
					<div {...classes('window')}>
						<div {...classes('content')}>
							<h3 {...classes('title')}>{this.props.event.title}</h3>
							<div {...classes('description')}>{this.props.event.description}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

	export default EventModal;
