import React, { Component } from 'react';

import CalendarFrame from './calendar-frame.jsx';
import CalendarTitle from './calendar-title.jsx';
import CalendarNavigation from './calendar-navigation.jsx';
import CalendarHeaders from './calendar-headers.jsx';
import CalendarGrid from './calendar-grid.jsx';

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
			events: [
				{
					id: 0,
					year: 2018,
					month: 2,
					day: 7,
					hour: 10,
					minute: 0,
					title: 'This event has a really long title',
					color: 'red'
				},
				{
					id: 1,
					year: 2018,
					month: 2,
					day: 7,
					hour: 10,
					minute: 30,
					title: 'This event has a really long title'
				},
				{
					id: 2,
					year: 2018,
					month: 2,
					day: 7,
					hour: 20,
					minute: 0,
					title: 'This event has a really long title',
					color: 'blue'
				},
				{
					id: 3,
					year: 2018,
					month: 2,
					day: 1,
					hour: 10,
					minute: 0,
					title: 'My Event Title',
					color: 'blue'
				},
				{
					id: 4,
					year: 2018,
					month: 2,
					day: 15,
					hour: 10,
					minute: 0,
					title: 'My Event Title',
					color: 'blue'
				},
				{
					id: 5,
					year: 2018,
					month: 2,
					day: 19,
					hour: 10,
					minute: 0,
					title: 'My Event Title',
					color: 'blue'
				},
				{
					id: 6,
					year: 2018,
					month: 2,
					day: 20,
					hour: 10,
					minute: 0,
					title: 'My Event Title',
					color: 'blue'
				},
			]
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
