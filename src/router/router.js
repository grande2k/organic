import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../vue/Pages/HomePage/HomePage.vue'
import ShopPage from '../vue/Pages/ShopPage/ShopPage.vue'
import NewsPage from '../vue/Pages/NewsPage/NewsPage.vue'

export default createRouter({
	routes: [
		{path: '/home', component: HomePage, alias: '/'},
		{path: '/shop', component: ShopPage},
		{path: '/news', component: NewsPage}
	],
	scrollBehavior(to, from, savedPosition) {
	    if (savedPosition) {
	      return savedPosition;
	    } else {
	      return { top: 0 }
	    }
	},
	history: createWebHashHistory(),
})