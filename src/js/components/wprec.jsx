import React, { Component } from 'react';

import Calendar from './calendar.jsx';
import EventModal from './event-modal.jsx';
import Frame from './frame.jsx';
import Overlay from './overlay.jsx';
import Portal from './portal.jsx';

import calendarCSS from '../../css/frames/calendar.scss';
import eventModalCSS from '../../css/frames/event-modal.scss';

import DemoData from '../demo-data.js';

/** WPREC widget component */

class WPREC extends Component {

	/**
	* Create a calendar.
	* @param {Object[]} props - The component properties.
	*/
	constructor(props) {
		super(props);
		this.iframe = React.createRef();
		this.state = {
			date: new Date(),
			events: DemoData,
			event: null
		};
	}

	/**
	* Set the calendar date.
	* @param {Date} date - The date to set the calendar to.
	*/
	setDate(date) {
		this.setState({ date: date });
	}

	/**
	* Set the current visible event.
	* @param {Object[]} event - The event to display.
	*/
	setEvent(event) {
		this.setState({ event: event });
	}

	/**
	* Render the widget.
	*/
	render() {
		return (
			<div className="wprec">
				<Frame css={calendarCSS}>
					<Calendar
						date={this.state.date}
						events={this.state.events}
						setDate={this.setDate.bind(this)}
						setEvent={this.setEvent.bind(this)}
					/>
				</Frame>
				<Portal>
					{this.state.event !== null &&
						<Overlay>
							<Frame fullscreen={true} css={eventModalCSS}>
								<EventModal event={this.state.event} setEvent={this.setEvent.bind(this)} />
							</Frame>
						</Overlay>
					}
				</Portal>
			</div>
		);
	}
}

export default WPREC;
