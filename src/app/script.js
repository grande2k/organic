'use strict';

import Header       from '../vue/Layouts/Header/Header.vue'
import Footer       from '../vue/Layouts/Footer/Footer.vue'
import scrollTopBtn from '../vue/UI/ScrollTopBtn/ScrollTopBtn.vue'
import AOS          from 'aos'

export default {
	name: 'App',
	components: {
    Header,
    Footer,
    scrollTopBtn
  },
  watch: {
    $route() {
      AOS.refresh();
    }
  },
}