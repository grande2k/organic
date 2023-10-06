'use strict';

export default {
	name: 'Header',
	data() {
		return {
			links: [
				{name: 'Home', path: '/'},
				{name: 'About', path: '/about'},
				{name: 'Pages', path: '/pages'},
				{name: 'Shop', path: '/shop'},
				{name: 'Projects', path: '/projects'},
				{name: 'News', path: '/news'},
			],
			cartItems: 0,
		}
	}
}