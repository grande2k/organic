'use strict';

export default{
    name: 'Products',
    props: {
        filter: String,
        preview: Number,
    },
    data() {
        return {
            productsList: [
                {
                    name: 'Calabrese Broccoli',
                    id: 1,
                    type: 'Vegetable',
                    image: 'broccoli',
                    rating: 5,
                    offer: false,
                    price: {
                        old: '5.99',
                        current: '3.99'
                    }
                },
                {
                    name: 'Fresh Banana Fruites',
                    id: 2,
                    type: 'Fruits',
                    image: 'bananas',
                    rating: 5,
                    offer: false,
                    price: {
                        old: '12.00',
                        current: '7.50'
                    }
                },
                {
                    name: 'White Nuts',
                    id: 3,
                    type: 'Nuts',
                    image: 'white-nuts',
                    rating: 4,
                    offer: false,
                    price: {
                        old: '5.00',
                        current: '2.99'
                    }
                },
                {
                    name: 'Vegan Red Tomato',
                    id: 4,
                    type: 'Vegetable',
                    image: 'tomatoes',
                    rating: 1,
                    offer: false,
                    price: {
                        old: '10.00',
                        current: '7.25'
                    }
                },
                {
                    name: 'Mung Bean',
                    id: 5,
                    type: 'Beans',
                    image: 'mung-beans',
                    rating: 5,
                    offer: false,
                    price: {
                        old: '3.45',
                        current: '1.45'
                    }
                },
                {
                    name: 'Brown Hazelnut',
                    id: 6,
                    type: 'Nuts',
                    image: 'brown-hazelnut',
                    rating: 5,
                    offer: false,
                    price: {
                        old: '2.00',
                        current: '1.25'
                    }
                },
                {
                    name: 'Eggs',
                    id: 7,
                    type: 'Fresh',
                    image: 'eggs',
                    rating: 4,
                    offer: false,
                    price: {
                        old: '10.00',
                        current: '8.00'
                    }
                },
                {
                    name: 'Zelco Suji Elaichi Rusk',
                    id: 8,
                    type: 'Fresh',
                    image: 'bread',
                    rating: 4,
                    offer: false,
                    price: {
                        old: '3.50',
                        current: '2.00'
                    }
                },
                {
                    name: 'Fresh Broccoli',
                    id: 9,
                    type: 'Vegetable',
                    image: 'broccoli-1',
                    rating: 5,
                    offer: true,
                    price: {
                        old: '20.00',
                        current: '11.00'
                    }
                },
                {
                    name: 'Cucumber',
                    id: 10,
                    type: 'Vegetable',
                    image: 'cucumber',
                    rating: 5,
                    offer: false,
                    price: {
                        old: '4.00',
                        current: '2.75'
                    }
                },
                {
                    name: 'Zucchini',
                    id: 11,
                    type: 'Vegetable',
                    image: 'kabachek',
                    rating: 4,
                    offer: true,
                    price: {
                        old: '20.00',
                        current: '12.00'
                    }
                }, 
                {
                    name: 'White Hazelnut',
                    id: 12,
                    type: 'Nuts',
                    image: 'white-hazelnuts',
                    rating: 4,
                    offer: false,
                    price: {
                        old: '7.45',
                        current: '5.45'
                    }
                },
                {
                    name: 'Onion',
                    id: 13,
                    type: 'Vegetable',
                    image: 'onion',
                    rating: 5,
                    offer: true,
                    price: {
                        old: '20.00',
                        current: '17.00'
                    }
                },
                {
                    name: 'Fresh Corn',
                    id: 14,
                    type: 'Fresh',
                    image: 'corn',
                    rating: 5,
                    offer: false,
                    price: {
                        old: '5.00',
                        current: '2.99'
                    }
                },
                {
                    name: 'Organic Almonds',
                    id: 15,
                    type: 'Nuts',
                    image: 'almonds',
                    rating: 4,
                    offer: false,
                    price: {
                        old: '4.00',
                        current: '1.99'
                    }
                },
                {
                    name: 'Green Cabbage',
                    id: 16,
                    type: 'Vegetable',
                    image: 'cabbage',
                    rating: 5,
                    offer: true,
                    price: {
                        old: '20.00',
                        current: '17.00'
                    }
                },
            ],
        }
    },
    computed: {
        products() {
            return this.productsList.slice(0, this.preview);
        },
        filteredProducts() {
            return this.productsList.filter(k => k[this.filter]);
        }
    }
}