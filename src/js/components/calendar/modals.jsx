import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// WPREC Calendar - Modals
//

class CalendarModals extends Component {

	//
	// Constructor
	//
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
		this.el.id = 'wprec-calendar-modals';
	}

	//
	// Add this portal to the modal root
	//
	componentDidMount() {
		document.body.appendChild(this.el);
	}

	//
	// Remove this portal from the modal root
	//
	componentWillUnmount() {
		document.body.removeChild(this.el);
	}

	//
	// Render children
	//
	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}

export default CalendarModals;
