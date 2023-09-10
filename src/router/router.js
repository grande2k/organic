import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../vue/Pages/HomePage/HomePage.vue'
import ContactsPage from '../vue/Pages/ContactsPage/ContactsPage.vue'

export default createRouter({
	routes: [
		{path: '/home', component: HomePage, alias: '/'},
		{path: '/contacts', component: ContactsPage}
	],
	history: createWebHashHistory()
})