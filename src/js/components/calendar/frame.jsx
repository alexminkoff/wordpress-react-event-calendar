import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// WPREC Calendar - Frame
//

const interval = 100; // Height refresh interval (ms)

class CalendarFrame extends Component {

	//
	// Constructor
	//
	constructor(props) {
		super(props);

		this.$css = document.getElementById('wprec-public-css');
		this.$container = document.createElement('div');

		this.state = { height: 0 };
	}

	//
	// Generate a style tag
	//

	//
	// On mount, render to iframe and start polling for height changes
	//
	componentDidMount() {

		// Get iframe elements
		this.$document = ReactDOM.findDOMNode(this).contentDocument;

		// Remove iframe styles
		this.$document.body.style.padding = 0;
		this.$document.body.style.margin = 0;

		// Add css and elements to iframe
		this.$document.head.appendChild(this.$css.cloneNode());
		this.$document.body.appendChild(this.$container);

		// Render children and start polling for height changes
		this.renderChildren();
		this.interval = setInterval(this.refreshHeight.bind(this), interval);
	}

	//
	// On update, update iframe contents and height
	//
	componentDidUpdate() {
		this.renderChildren();
		this.refreshHeight();
	}

	//
	// On unmount, clear interval
	//
	componentWillUnmount() {
		React.unmountComponentAtNode(this.$container);
		clearInterval(this.interval);
	}

	//
	// Set iframe height to its content height
	//
	refreshHeight() {
		var height = this.$document.body.scrollHeight;
		if (height != this.state.height) {
			this.setState({ height: height });
		}
	}

	//
	// Render children
	//
	renderChildren() {
		ReactDOM.render(this.props.children, this.$container);
	}

	//
	// Render
	//
	render() {
		return <iframe className="wprec-calendar-frame"
			style={{ height: this.state.height }} allowtransparency="true" />;
	}
}

export default CalendarFrame;
