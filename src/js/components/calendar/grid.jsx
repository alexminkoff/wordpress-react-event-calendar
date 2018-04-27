import React, { Component } from 'react';

/** WPREC calendar grid component */

class CalendarGrid extends Component {

	/**
	* Open an event modal.
	*/
	openModal(event, e) {
		e.preventDefault();
		this.props.setEvent(event);
	}

	/**
	* Date helpers.
	*/
	getYear()       { return this.props.date.getFullYear() }
	getMonth()      { return this.props.date.getMonth() }
	getMonthStart() { return new Date(this.getYear(), this.getMonth(), 1) }
	getMonthEnd()   { return new Date(this.getYear(), this.getMonth() + 1, 0) }
	getPrevDays()   { return this.getMonthStart().getDay() }
	getNextDays()   { return 6 - this.getMonthEnd().getDay() }
	getStartDay()   { return 1 - this.getPrevDays() }
	getEndDay()     { return this.getMonthEnd().getDate() + this.getNextDays() }

	/**
	* Get a list of dates to show on the calendar.
	*/
	getDates() {
		var dates = [];
		for (var day = this.getStartDay(); day <= this.getEndDay(); day++) {
			dates.push(new Date(this.getYear(), this.getMonth(), day));
		}
		return dates;
	}

	/**
	* Get calendar grid rows.
	*/
	getRows() {
		var rows = [];
		var dates = this.getDates();
		var i = 0;
		while (dates.length > 0) {
			rows.push(
				<tr key={i} className="wprec-calendar-grid__row">
					{this.getCells(dates.splice(0, 7))}
				</tr>
			);
			i++;
		}
		return rows;
	}


	/**
	* Get the CSS class of a given date cell.
	*/
	getCellClass(date) {
		var className = ['wprec-calendar-grid__cell'];
		if (date.getMonth() != this.getMonth()) {
			className.push('wprec-calendar-grid__cell--disabled');
		}
		if (!this.hasEvents(date)) {
			className.push('wprec-calendar-grid__cell--empty');
		}
		return className.join(' ');
	}

	/**
	* Get the CSS class of a given event element.
	*/
	getEventClass(event) {
		var className = ['wprec-calendar-grid__event'];
		if (event.hasOwnProperty('color')) {
			className.push('wprec-calendar-grid__event--' + event.color);
		}
		return className.join(' ');
	}

	/**
	* Get the time of the event as a string.
	*/
	getEventTime(event) {
		var minutes = event.minute == 0 ? '' : ':' + ('0' + event.minute).slice(-2);
		var ampm = (event.hour < 12 || event.hour == 24) ? ' AM' : ' PM';
		return event.hour % 12 + minutes + ampm;
	}

	/**
	* Get all event data for a certain date.
	*/
	getEventData(date) {
		var y = date.getFullYear();
		var m = date.getMonth();
		var d = date.getDate();
		return this.props.events.filter(
			date => (date.year == y && date.month == m && date.day == d)
		);
	}

	/**
	* Check if this month has no events.
	*/
	isEmpty() {
		var y = this.props.date.getFullYear();
		var m = this.props.date.getMonth();
		return this.props.events.filter(
			date => (date.year == y && date.month == m)).length === 0;
	}

	/**
	* Check if a date has events.
	*/
	hasEvents(date) {
		return this.getEventData(date).length > 0;
	}

	/**
	* Get the events that fall on a given date.
	*/
	getEvents(date) {
		return this.getEventData(date).map((event) =>
			<a className={this.getEventClass(event)} href="#" key={event.id} onClick={this.openModal.bind(this, event)}>
				<span className="wprec-calendar-grid__time">{this.getEventTime(event)}</span> {event.title}
			</a>
		);
	}

	/**
	* Get a row of date cells.
	*/
	getCells(dates) {
		var cells = [];
		var i = 0;
		for (var date of dates) {
			cells.push(
				<td key={i} className={this.getCellClass(date)}>
					<div className="wprec-calendar-grid__date">{date.getDate()}</div>
					<div className="wprec-calendar-grid__events">{this.getEvents(date)}</div>
				</td>
			);
			i++;
		}
		return cells;
	}

	/**
	* Get the CSS class of the grid.
	*/
	getClassName() {
		var className = ['wprec-calendar-grid'];
		if (this.isEmpty()) {
			className.push('wprec-calendar-grid--empty');
		}
		return className.join(' ');
	}

	/**
	* Render the grid.
	*/
	render() {
		return (
			<tbody className={this.getClassName()}>{this.getRows()}</tbody>
		);
	}
}

export default CalendarGrid;
