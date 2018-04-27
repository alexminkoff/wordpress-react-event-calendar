import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/** WPREC portal component */

class Portal extends Component {

	/**
	* Create a portal.
	* @param {Object[]} props - The component properties.
	*/
	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	/**
	* Add the portal element to the document body on mount.
	*/
	componentDidMount() {
		document.body.appendChild(this.el);
	}

	/**
	* Remove the portal element from the document body on unmount.
	*/
	componentWillUnmount() {
		document.body.removeChild(this.el);
	}

	/**
	* Render children inside the portal.
	*/
	render() {
		return ReactDOM.createPortal(this.props.children, this.el);
	}
}

export default Portal;
