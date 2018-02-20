import React, { Component } from 'react';

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
			date: new Date()
		};
	}

	//
	// Render
	//
	render() {
		return (
			<div className="wpec-calendar">
				<CalendarTitle date={this.state.date} />
				<table className="wpec-calendar__table">
					<CalendarHeaders />
					<CalendarGrid date={this.state.date} />
				</table>
			</div>
		);
	}
}

//
// WPREC Calendar - Title
//
class CalendarTitle extends Component {

	//
	// Get calendar title
	//
	getTitle() {
		return dateFormat(this.props.date, 'mmmm yyyy');
	}

	//
	// Render
	//
	render() {
		return (<div className="wpec-calendar-title">{this.getTitle()}</div>);
	}
}

//
// WPREC Calendar - Headers
//
class CalendarHeaders extends Component {
	render() {
		return (
			<thead className="wpec-calendar-headers">
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

//
// WPREC Calendar - Grid
//
class CalendarGrid extends Component {

	//
	// Date helpers
	//
	getYear()       { return this.props.date.getFullYear() }
	getMonth()      { return this.props.date.getMonth() }

	// Get first and last day of the current month
	getMonthStart() { return new Date(this.getYear(), this.getMonth(), 1) }
	getMonthEnd()   { return new Date(this.getYear(), this.getMonth() + 1, 0) }

	// Get # of days to show from previous and next month
	getPrevDays()   { return this.getMonthStart().getDay() }
	getNextDays()   { return 6 - this.getMonthEnd().getDay() }

	// Get the first and last days to show
	getStartDay()   { return 1 - this.getPrevDays() }
	getEndDay()     { return this.getMonthEnd().getDate() + this.getNextDays() }

	//
	// Get a list of dates to show on the calendar
	//
	getDates() {
		var dates = [];
		for (var day = this.getStartDay(); day <= this.getEndDay(); day++) {
			dates.push(new Date(this.getYear(), this.getMonth(), day));
		}
		return dates;
	}

	//
	// Get calendar grid rows
	//
	getRows() {
		var rows = [];
		var dates = this.getDates();
		var i = 0;
		while (dates.length > 0) {
			rows.push(
				<tr key={i} className="wpec-calendar-grid__row">
					{this.getCells(dates.splice(0, 7))}
				</tr>
			);
			i++;
		}
		return rows;
	}

	//
	// Get a row of date cells
	//
	getCells(dates) {
		var cells = [];
		var i = 0;
		for (var date of dates) {
			cells.push(<td key={i} className="wpec-calendar-grid__cell">{date.getDate()}</td>);
			i++;
		}
		return cells;
	}

	//
	// Render
	//
	render() {
		return (
			<tbody className="wpec-calendar-grid">{this.getRows()}</tbody>
		);
	}
}

export default Calendar;
