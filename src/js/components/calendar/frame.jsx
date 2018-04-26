import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Frame from 'react-frame-component';

import css from '../../../css/frame.scss';

/** WPREC calendar widget frame */

class CalendarFrame extends Component {

	/**
	* Create a calendar.
	* @param {Object[]} props - The component properties.
	*/
	constructor(props) {
		super(props);
		this.iframe = React.createRef();
		this.state = {
			height: this.props.fullscreen === true ? '100vh' : 0
		}
	}

	/**
	* Initial HTML for the calendar frame.
	*/
	initialContent() {
		return (
			`<!DOCTYPE html>
			<html>
				<head>
					<style>
					html, body { margin: 0; padding: 0 }
					${css}
					</style>
				</head>
				<body><div></div></body>
			</html>`
		);
	}

	/**
	* Adjust the height of the calendar frame to match its contents.
	*/
	adjustHeight() {
		var iframe = ReactDOM.findDOMNode(this.iframe.current);
		var height = this.props.fullscreen === true ? '100vh' :
			iframe.contentWindow.document.body.scrollHeight || 'auto';
		if (height != this.state.height) {
			this.setState({
				height: height
			});
		}
	}

	/**
	 * The component mounted.
	 */
	componentDidMount() {
		window.addEventListener('resize', this.adjustHeight.bind(this));
	}

	/**
	 * The component will unmount.
	 */
	componentWillUnmount() {
		window.removeEventListener('resize', this.adjustHeight.bind(this));
	}


	/**
	* Render the calendar widget
	*/
	render() {
		return (
			<Frame className="wprec-frame" ref={this.iframe} initialContent={this.initialContent()} style={{ height: this.state.height }}
					contentDidMount={this.adjustHeight.bind(this)} contentDidUpdate={this.adjustHeight.bind(this)}>
				{this.props.children}
			</Frame>
		);
	}
}

export default CalendarFrame;
