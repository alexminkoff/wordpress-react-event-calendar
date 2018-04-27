import React from 'react';
import ReactDOM from 'react-dom';

import WPREC from './components/wprec.jsx';

document.addEventListener('DOMContentLoaded', function() {
	Array.from(document.querySelectorAll('.wprec-shortcode')).forEach(calendar => {
		ReactDOM.render(
			<WPREC id={calendar.getAttribute('data-id')} />,
			calendar
		);
	});
});
