import { createRouter, createWebHistory } from 'vue-router'
import HomePage      from '../vue/Pages/HomePage/HomePage.vue'
import ShopPage      from '../vue/Pages/ShopPage/ShopPage.vue'
import NewsPage      from '../vue/Pages/NewsPage/NewsPage.vue'
import AboutPage     from '../vue/Pages/AboutPage/AboutPage.vue'
import TeamPage      from '../vue/Pages/TeamPage/TeamPage.vue'
import ContactsPage  from '../vue/Pages/ContactsPage/ContactsPage.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{path: '/home', component: HomePage, alias: '/'},
		{path: '/shop', component: ShopPage, meta: {title: 'Organick - Shop'}},
		{path: '/news', component: NewsPage, meta: {title: 'Organick - News'}},
		{path: '/about',component: AboutPage, meta: {title: 'Organick - About'}},
		{path: '/team', component: TeamPage, meta: {title: 'Organick - Our Team'}},
		{path: '/contacts', component: ContactsPage, meta: {title: 'Organick - Contacts'}},
	],
	scrollBehavior(to, from, savedPosition) {
	    if (savedPosition) {
	      return savedPosition;
	    } else {
	      return { top: 0 }
	    }
	},
});

router.beforeEach((to) => {
	document.title = to.meta?.title ?? 'Organick - Choose the best healthier way of life'
});

export default router;