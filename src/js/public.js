import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/calendar.jsx';

document.addEventListener('DOMContentLoaded', function() {
	Array.from(document.querySelectorAll('.wprec-shortcode')).forEach(calendar => {
		ReactDOM.render(
			<Calendar id={calendar.getAttribute('data-id')} />,
			calendar
		);
	});
});
