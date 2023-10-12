'use strict';

export default {
	name: 'Header',
	data() {
		return {
			burgerActive: false,
			links: [
				{name: 'Home', path: '/'},
				{name: 'About', path: '/about'},
				{name: 'Team', path: '/team'},
				{name: 'Shop', path: '/shop'},
				{name: 'Contacts', path: '/contacts'},
				{name: 'News', path: '/news'},
			],
			cartItems: 0,
		}
	},
	watch: {
		burgerActive(newVal) {
			newVal ? document.querySelector('html').classList.add('lock') : document.querySelector('html').classList.remove('lock');
		}
	},
}