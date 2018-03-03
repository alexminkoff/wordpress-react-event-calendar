import React, { Component } from 'react';

var dateFormat = require('dateformat');

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
		return (<div className="wprec-calendar-title">{this.getTitle()}</div>);
	}
}

export default CalendarTitle;
