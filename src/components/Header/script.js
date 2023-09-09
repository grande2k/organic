'use strict';

export default {
	name: 'Header',
	data() {
		return {
			links: [
				{name: 'Home', path: '/home'},
				{name: 'About', path: '/contacts'},
				{name: 'Pages', path: '/'},
				{name: 'Shop', path: '/'},
				{name: 'Projects', path: '/'},
				{name: 'News', path: '/'},
			],
			cartItems: 0,
		}
	}
}