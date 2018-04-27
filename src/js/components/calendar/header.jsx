import React, { Component } from 'react';

/** WPREC calendar header component */

class CalendarHeader extends Component {

	//
	// Render
	//
	render() {
		return (
			<thead className="wprec-calendar-header">
				<tr className="wprec-calendar-header__row">
					<th className="wprec-calendar-header__cell">Sun</th>
					<th className="wprec-calendar-header__cell">Mon</th>
					<th className="wprec-calendar-header__cell">Tue</th>
					<th className="wprec-calendar-header__cell">Wed</th>
					<th className="wprec-calendar-header__cell">Thu</th>
					<th className="wprec-calendar-header__cell">Fri</th>
					<th className="wprec-calendar-header__cell">Sat</th>
				</tr>
			</thead>
		);
	}
}

export default CalendarHeader;
