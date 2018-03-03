import React, { Component } from 'react';

//
// WPREC Calendar - Headers
//

class CalendarHeaders extends Component {

	//
	// Render
	//
	render() {
		return (
			<thead className="wprec-calendar-headers">
				<tr>
					<th>Sun</th>
					<th>Mon</th>
					<th>Tue</th>
					<th>Wed</th>
					<th>Thu</th>
					<th>Fri</th>
					<th>Sat</th>
				</tr>
			</thead>
		);
	}
}

export default CalendarHeaders;
