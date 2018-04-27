import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactFrameComponent from 'react-frame-component';

/** WPREC frame component */

class Frame extends Component {

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
					<style>${this.props.css}</style>
				</head>
				<body>
					<div></div>
				</body>
			</html>`
		);
	}

	/**
	* Update the height of the calendar frame to match its contents.
	*/
	updateHeight() {
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
	 * On mount, start listening for window resizes.
	 */
	componentDidMount() {
		window.addEventListener('resize', this.updateHeight.bind(this));
	}

	/**
	 * On unmount, stop listening for window resizes.
	 */
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateHeight.bind(this));
	}

	/**
	* Render the frame.
	*/
	render() {
		return (
			<ReactFrameComponent
				className="wprec-frame"
				ref={this.iframe}
				initialContent={this.initialContent()}
				style={{ height: this.state.height }}
				contentDidMount={this.updateHeight.bind(this)}
				contentDidUpdate={this.updateHeight.bind(this)}
			>
				{this.props.children}
			</ReactFrameComponent>
		);
	}
}

export default Frame;
