import React, { Component } from 'react';

import Frame from './frame.jsx';

import CalendarNavigation from './calendar/navigation.jsx';
import CalendarGrid from './calendar/grid.jsx';
import CalendarModals from './calendar/modals.jsx';
import CalendarEventModal from './calendar/event-modal.jsx'

import DemoData from '../demo-data.js';

var dateFormat = require('dateformat');

//
// WPREC Calendar
//

class Calendar extends Component {

	//
	// Constructor
	//
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			mounted: false,
			events: DemoData,
			event: null
		};
	}

	//
	// Set the current date
	//
	setDate(date) {
		this.setState({ date: date });
	}

	//
	// Set the current event
	//
	setEvent(event) {
		this.setState({ event: event });
	}

	//
	// Set the current date
	//
	componentDidMount() {
		this.setState({ mounted: true });
	}

	//
	// Get calendar title
	//
	getTitle() {
		return dateFormat(this.state.date, 'mmmm yyyy');
	}

	//
	// Render
	//
	render() {
		return (
			<Frame>
				<div className="wprec-calendar" style={{ display: 'none' }}>
					<div className="wprec-calendar__title">{this.getTitle()}</div>
					<CalendarNavigation date={this.state.date} setDate={this.setDate.bind(this)} />
					<table className="wprec-calendar__table">
						<thead>
							<tr>
								<th className="wprec-calendar__header">Sun</th>
								<th className="wprec-calendar__header">Mon</th>
								<th className="wprec-calendar__header">Tue</th>
								<th className="wprec-calendar__header">Wed</th>
								<th className="wprec-calendar__header">Thu</th>
								<th className="wprec-calendar__header">Fri</th>
								<th className="wprec-calendar__header">Sat</th>
							</tr>
						</thead>
						<CalendarGrid date={this.state.date} events={this.state.events} setEvent={this.setEvent.bind(this)} />
					</table>
				</div>
				<CalendarModals>
					{this.state.event !== null &&
						<CalendarEventModal event={this.state.event} setEvent={this.setEvent.bind(this)} />
					}
				</CalendarModals>
			</Frame>
		);
	}
}

export default Calendar;
