'use strict';

import ArrowButton from '../../UI/ArrowButton/ArrowButton.vue'
import Products    from '../../components/Products/Products.vue'
import News        from '../../components/News/News.vue'
import Subscribe   from '../../components/Subscribe/Subscribe.vue'
import Slider      from './components/Slider/Slider.vue'
import AutoCounter from 'vue3-autocounter'
import { inView }  from 'motion'
import AOS         from 'aos'

export default {
	name: 'HomePage',
	components: {
		ArrowButton,
		Products,
		Slider,
		AutoCounter,
		News,
		Subscribe,
		inView
	},
	data() {
		return {
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
					suffix: '+',
				},
				{
					number: 25,
					name: 'Years of Farming',
					suffix: '+',
				},
			]
		}
	},
	mounted() {
		inView(this.$refs.counters, () => {
		  	this.$refs.counter_item.forEach(item => {
				item.start();
				AOS.init();
			});
		});
	}
}