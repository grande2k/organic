'use strict';

export default {
	name: 'Header',
	data() {
		return {
			links: [
				{name: 'Home', path: '/home'},
				{name: 'About', path: '/'},
				{name: 'Pages', path: '/'},
				{name: 'Shop', path: '/'},
				{name: 'Projects', path: '/'},
				{name: 'News', path: '/news'},
			],
			cartItems: 0,
		}
	}
}