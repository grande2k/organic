'use strict';

import ArrowButton from '../../UI/ArrowButton/ArrowButton.vue'
import Products    from '../../components/Products/Products.vue'

export default {
	name: 'HomePage',
	components: {
		ArrowButton,
		Products
	},
	data() {
		return {
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
			        name: 'Брокколи Ц-1',
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
			        name: 'Кабачок',
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
			        name: 'Pioz',
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
			        name: 'Siski',
			        id: 4,
			        type: 'Vegetable',
			        image: 'cabbage',
			        rating: 5,
			        price: {
			        	old: '20.00',
			        	current: '17.00'
			        }
			    }
			]
		}
	}
}