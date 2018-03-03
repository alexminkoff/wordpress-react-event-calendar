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
	getFrameBody() {
		return ReactDOM.findDOMNode(this).contentDocument.body;
	}
	setHeight() {
		var height = this.getFrameBody().scrollHeight;
		if (height != this.state.height) {
			this.setState({
				height: height
			});
		}
	}
	componentDidMount() {
		this.$container = document.createElement('div');
		this.getFrameBody().appendChild(this.$container);
		ReactDOM.render(this.props.children, this.$container);
		setInterval(this.setHeight.bind(this), 10);
	}
	componentDidUpdate() {
		ReactDOM.render(this.props.children, this.$container);
		this.setHeight();
	}
	getStyle() {
		return {
			border: 'none',
			width: '100%',
			height: this.state.height
		}
	}
	render() {
		return <iframe style={this.getStyle()} allowTransparency="true" />;
	}
}

export default CalendarFrame;
