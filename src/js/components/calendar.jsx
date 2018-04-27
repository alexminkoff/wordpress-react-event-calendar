import React, { Component } from 'react';

var dateFormat = require('dateformat');

import CalendarGrid from './calendar/grid.jsx';
import CalendarHeader from './calendar/header.jsx';
import CalendarNavigation from './calendar/navigation.jsx';

/** WPREC calendar component */

class Calendar extends Component {

	/**
	* Get a title for the calendar.
	*/
	getTitle() {
		return dateFormat(this.props.date, 'mmmm yyyy');
	}

	/**
	* Render the calendar widget.
	*/
	render() {
		return (
			<div className="wprec-calendar">
				<div className="wprec-calendar__title">{this.getTitle()}</div>
				<CalendarNavigation date={this.props.date} setDate={this.props.setDate} />
				<table className="wprec-calendar__table">
					<CalendarHeader />
					<CalendarGrid date={this.props.date} events={this.props.events} setEvent={this.props.setEvent} />
				</table>
			</div>
		);
	}
}

export default Calendar;
