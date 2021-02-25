import Vue from 'vue'
import VueRouter from 'vue-router'
import Galleries from '../views/Galleries.vue'
import CreateNewGallery from '../views/CreateNewGallery.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyGalleries from '../views/MyGalleries.vue'
import ViewGallery from '../views/ViewGallery.vue'
import AuthorGalleries from '../views/AuthorGalleries.vue'
import EditGallery from '../views/EditGallery.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/galleries'
	},
	{
		path: '/galleries',
		name: 'Galleries',
		component: Galleries
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: { guestRequired: true }
	},
	{
		path: '/register',
		name: 'Register',
		component: Register,
		meta: { guestRequired: true }		
	},
	{
		path: '/create',
		name: 'CreateNewGallery',
		component: CreateNewGallery,
		meta: { authRequired: true }		
	},
	{
		path: '/my-galleries',
		name: 'MyGalleries',
		component: MyGalleries,
		meta: { authRequired: true }				
	},
	{
		path: '/galleries/:id',
		name: 'ViewGallery',
		component: ViewGallery
	},
	{
		path: '/authors/:id',
		name: 'AuthorGalleries',
		component: AuthorGalleries
	},
	{
		path: '/edit-gallery/:id',
		name: 'EditGallery',
		component: EditGallery,
		meta: { authRequired: true }				
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router