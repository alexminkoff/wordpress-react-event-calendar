import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//
// WPREC Frame
//

const interval = 15; // Height refresh interval (ms)
const cssID = 'wprec-public-css'; // Style sheet ID

class Frame extends Component {

	//
	// Constructor
	//
	constructor(props) {
		super(props);
		this.state = {
			height: this.props.fullscreen === true ? '100vh' : 0
		};
	}

	//
	// On mount, create a rendering container and clone the WPREC CSS
	// Insert these into our iframe, then render the component children inside of
	// the rendering container. Start checking to see if the CSS is loaded.
	// The rendering container stays hidden until the CSS is loaded.
	//
	componentDidMount() {

		// Copy CSS element
		this.$css = document.getElementById(cssID).cloneNode();

		// Create rendering container
		this.$container = document.createElement('div');
		this.$container.style.display = 'none';

		// Get iframe document object
		this.$document = ReactDOM.findDOMNode(this).contentDocument;

		// Add CSS and container to iframe
		this.$document.head.appendChild(this.$css);
		this.$document.body.appendChild(this.$container);

		// Remove iframe styles
		this.$document.body.style.padding = 0;
		this.$document.body.style.margin = 0;

		// Poll for height changes
		this.interval = setInterval(this.update.bind(this), interval);

		// Render
		this.renderChildren();
	}

	//
	// Check to see if CSS is loaded
	// If so, render and show the content
	// Refresh the iframe height
	//
	update() {
		if (this.$css.sheet !== null) {
			this.$container.style.display = 'block';
		}
		if (this.props.fullscreen !== true) {
			var height = this.$container.scrollHeight;
			if (height != this.state.height) {
				this.setState({ height: height });
			}
		}
	}

	//
	// On update, re-render children and update height
	//
	componentDidUpdate() {
		this.renderChildren();
	}

	//
	// On unmount, unmount children
	//
	componentWillUnmount() {
		clearInterval(this.interval);
		ReactDOM.unmountComponentAtNode(this.$container);
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
		return <iframe className="wprec-frame" style={{ height: this.state.height }}
			scrolling="no" allowtransparency="true" />;
	}
}

export default Frame;
