import React, { Component } from 'react';

import CalendarFrame from './calendar-frame.jsx';
import CalendarTitle from './calendar-title.jsx';
import CalendarNavigation from './calendar-navigation.jsx';
import CalendarHeaders from './calendar-headers.jsx';
import CalendarGrid from './calendar-grid.jsx';

import DemoData from '../demo-data.js';

//
// WPREC Calendar
//

class Calendar extends Component {

	//
	// Constructor
	//
	constructor(props) {
		super(props);
		this.css = document.getElementById('wprec-public-css');
		this.state = {
			date: new Date(),
			mounted: false,
			events: DemoData
		};
	}

	//
	// Set the current date
	//
	setDate(date) {
		this.setState({ date: date });
	}

	//
	// Set the current date
	//
	componentDidMount() {
		this.setState({ mounted: true });
	}

	//
	// Render
	//
	render() {
		return (
			<CalendarFrame>
				<link href={this.css.href} rel="stylesheet" />
				<div className="wprec-calendar" style={{ display: 'none' }}>
					<CalendarTitle date={this.state.date} />
					<CalendarNavigation date={this.state.date} setDate={this.setDate.bind(this)} />
					<table className="wprec-calendar__table">
						<CalendarHeaders />
						<CalendarGrid date={this.state.date} events={this.state.events} />
					</table>
				</div>
			</CalendarFrame>
		);
	}
}

export default Calendar;
