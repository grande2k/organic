'use strict';

import ArrowButton from '../../UI/ArrowButton/ArrowButton.vue'
import Products    from '../../components/Products/Products.vue'
import News        from '../../components/News/News.vue'
import Subscribe   from '../../components/Subscribe/Subscribe.vue'
import Slider      from './components/Slider/Slider.vue'
import AutoCounter from 'vue3-autocounter'

export default {
	name: 'HomePage',
	components: {
		ArrowButton,
		Products,
		Slider,
		AutoCounter,
		News,
		Subscribe
	},
	data() {
		return {
			scrolled: false,
			categories: [
				{
			        name: 'Calabrese Broccoli',
			        id: 1,
			        type: 'Vegetable',
			        image: 'broccoli',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '13.00'
			        }
			    },
			    {
			        name: 'Fresh Banana Fruites',
			        id: 2,
			        type: 'Fresh',
			        image: 'bananas',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '14.00'
			        }
			    },
			    {
			        name: 'White Nuts',
			        id: 3,
			        type: 'Millets',
			        image: 'white-nuts',
			        rating: 4,
			        price: {
			        	old: '20.00',
			        	current: '15.00'
			        }
			    },
			    {
			        name: 'Vegan Red Tomato',
			        id: 4,
			        type: 'Vegetable',
			        image: 'tomatoes',
			        rating: 1,
			        price: {
			        	old: '20.00',
			        	current: '17.00'
			        }
			    },
			    {
			        name: 'Mung Bean',
			        id: 5,
			        type: 'Health',
			        image: 'mung-beans',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '11.00'
			        }
			    },
			    {
			        name: 'Brown Hazelnut',
			        id: 6,
			        type: 'Nuts',
			        image: 'brown-hazelnut',
			        rating: 3,
			        price: {
			        	old: '20.00',
			        	current: '12.00'
			        }
			    },
			    {
			        name: 'Eggs',
			        id: 7,
			        type: 'Fresh',
			        image: 'eggs',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '17.00'
			        }
			    },
			    {
			        name: 'Zelco Suji Elaichi Rusk',
			        id: 8,
			        type: 'Fresh',
			        image: 'bread',
			        rating: 4,
			        price: {
			        	old: '20.00',
			        	current: '15.00'
			        }
			    }
			],
			offers: [
				{
			        name: 'Fresh Broccoli',
			        id: 1,
			        type: 'Vegetable',
			        image: 'broccoli-1',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '11.00'
			        }
			    },
			    {
			        name: 'Zucchini',
			        id: 2,
			        type: 'Vegetable',
			        image: 'kabachek',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '12.00'
			        }
			    },
			    {
			        name: 'Onion',
			        id: 3,
			        type: 'Vegetable',
			        image: 'onion',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '17.00'
			        }
			    },
			    {
			        name: 'Green Cabbage',
			        id: 4,
			        type: 'Vegetable',
			        image: 'cabbage',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '17.00'
			        }
			    }
			],
			counters: [
				{
					number: 100,
					name: 'Organic',
					suffix: '%',
				},
				{
					number: 285,
					name: 'Active Products',
					suffix: '',
				},
				{
					number: 350,
					name: 'Organic Orchads',
					suffix: '%',
				},
				{
					number: 25,
					name: 'Years of Farming',
					suffix: '+',
				},
			]
		}
	},
	methods: {
		handleScroll() {
		    this.scrolled      = window.scrollY > 0;
		    let scrollTop      = window.top.scrollY;
		    let countZoneTop   = this.$refs.testimonials.getBoundingClientRect().top + window.scrollY;
		    let nextElementTop = this.$refs.testimonials.nextElementSibling.getBoundingClientRect().top + window.scrollY;

	    	if( scrollTop > countZoneTop && scrollTop < nextElementTop ) {
		    	this.$refs.counter.forEach(item => {
					item.start();
				});
				window.removeEventListener('scroll', this.handleScroll);
		    }
		}
	},
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	unmounted () {
		window.removeEventListener('scroll', this.handleScroll);
	}
}