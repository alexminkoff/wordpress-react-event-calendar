import React, { Component } from 'react';

var dateFormat = require('dateformat');

import CalendarFrame from './calendar/frame.jsx';
import CalendarNavigation from './calendar/navigation.jsx';
import CalendarGrid from './calendar/grid.jsx';
import CalendarModals from './calendar/modals.jsx';
import CalendarEventModal from './calendar/event-modal.jsx';

import DemoData from '../demo-data.js';

/** WPREC calendar widget component */

class Calendar extends Component {

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
	* Get a title for the calendar.
	*/
	getTitle() {
		return dateFormat(this.state.date, 'mmmm yyyy');
	}

	/**
	* Render the calendar widget
	*/
	render() {
		return (
			<CalendarFrame>
				<div className="wprec-calendar">
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
			</CalendarFrame>
		);
	}
}

export default Calendar;
