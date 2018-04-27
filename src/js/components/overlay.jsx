import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';

var classes = new BEMHelper({
	name: 'overlay',
	prefix: 'wprec-'
});

/** WPREC overlay component */

class Overlay extends Component {

	/**
	* Render the overlay.
	*/
	render() {
		return (
			<div {...classes()}>
				<div {...classes('background')} />
				<div {...classes('content')}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

	export default Overlay;
