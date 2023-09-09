import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../components/HomePage/HomePage.vue'
import ContactsPage from '../components/ContactsPage/ContactsPage.vue'

export default createRouter({
	routes: [
		{path: '/home', component: HomePage, alias: '/'},
		{path: '/contacts', component: ContactsPage}
	],
	history: createWebHashHistory()
})