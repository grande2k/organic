'use strict';

export default{
    name: 'Products',
    props: {
        titleBig: String,
    },
    data() {
        return {
            products: [
                {
                    name: 'Product 1',
                    id: 1,
                    price: '10$'
                },
                {
                    name: 'Product 2',
                    id: 2,
                    price: '10$'
                },
                {
                    name: 'Product 3',
                    id: 3,
                    price: '10$'
                },
                {
                    name: 'Product 4',
                    id: 4,
                    price: '10$'
                },
                {
                    name: 'Product 5',
                    id: 5,
                    price: '10$'
                },
                {
                    name: 'Product 6',
                    id: 6,
                    price: '10$'
                },
            ]
        }
    }
}