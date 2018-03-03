import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// WPREC Calendar - Frame
//

class CalendarFrame extends Component {

	//
	// Constructor
	//
	constructor(props) {
		super(props);
		this.state = { height: 0 }
	}

	//
	// Get iframe body element
	//
	getFrameBody() {
		return ReactDOM.findDOMNode(this).contentDocument.body;
	}

	//
	// Set iframe height to its content height
	//
	setHeight() {
		var height = this.getFrameBody().scrollHeight;
		if (height != this.state.height) {
			this.setState({
				height: height
			});
		}
	}

	//
	// On mount, render to iframe and start polling for height changes
	//
	componentDidMount() {
		this.$container = document.createElement('div');
		this.getFrameBody().appendChild(this.$container);
		ReactDOM.render(this.props.children, this.$container);
		setInterval(this.setHeight.bind(this), 10);
	}

	//
	// On update, update iframe contents and height
	//
	componentDidUpdate() {
		ReactDOM.render(this.props.children, this.$container);
		this.setHeight();
	}

	//
	// Get iframe styles
	//
	getStyle() {
		return {
			border: 'none',
			width: '100%',
			height: this.state.height
		}
	}

	//
	// Render
	//
	render() {
		return <iframe className="wprec-calendar-frame"
			style={this.getStyle()} allowTransparency="true" />;
	}
}

export default CalendarFrame;
