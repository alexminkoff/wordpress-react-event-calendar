import React, { Component } from 'react';

//
// WPREC Calendar - Navigation
//

class CalendarNavigation extends Component {

	//
	// Offset a date by a number of months
	//
	addMonths(date, n) {
		return new Date(date.getFullYear(), date.getMonth() + n);
	}

	//
	// Go to previous or next month
	//
	prevMonth(e) {
		e.preventDefault();
		this.props.setDate(this.addMonths(this.props.date, -1));
	}
	nextMonth(e) {
		e.preventDefault();
		this.props.setDate(this.addMonths(this.props.date, 1));
	}

	//
	// Render
	//
	render() {
		return (
			<div className="wprec-calendar-navigation">
				<a className="wprec-calendar-navigation__prev" onClick={this.prevMonth.bind(this)} href="#"></a>
				<a className="wprec-calendar-navigation__next" onClick={this.nextMonth.bind(this)} href="#"></a>
			</div>
		);
	}
}

export default CalendarNavigation;
