'use strict';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
	name: 'Slider',
	components: {
		Carousel,
	    Slide,
	    Pagination,
	    Navigation,
	},
	data() {
		return {
			testimonials: [
				{
					name: 'Sara Taylor',
					type: 'Consumer',
					description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
					rating: '5',
					img: 'avatar-1',
				},
				{
					name: 'John Doe',
					type: 'Consumer',
					description: 'Lorem Ipsum simply dummy text of the printing and typesetting industry.',
					rating: '3',
					img: 'avatar-2',
				},
				{
					name: 'Emily Anderson',
					type: 'Consumer',
					description: 'Lorem Ipsum simply dummy text of the printing and typesetting industry.',
					rating: '2',
					img: 'avatar-3',
				},
			]	
		}
	}
}