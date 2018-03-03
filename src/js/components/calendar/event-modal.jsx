import React, { Component } from 'react';

//
// WPREC Calendar Event Modal
//

class CalendarEventModal extends Component {

		//
		// Close modal
		//
		closeModal(e) {
			e.preventDefault();
			this.props.setEvent(null);
		}

		//
		// Render
		//
		render() {
			return (
				<div className="wprec-calendar-event-modal">
					<div className="wprec-calendar-event-modal__overlay" />
					<div className="wprec-calendar-event-modal__window">
						<div className="wprec-calendar-event-modal__wrap1" onClick={this.closeModal.bind(this)}>
							<div className="wprec-calendar-event-modal__wrap2">
								<div className="wprec-calendar-event-modal__wrap3">
									<div className="wprec-calendar-event-modal__wrap4">
										<h3 className="wprec-calendar-event-modal__title">{this.props.event.title}</h3>
										<div className="wprec-calendar-event-modal__description">{this.props.event.description}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>);
		}
	}

	export default CalendarEventModal;