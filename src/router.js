import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routers = [
	// { path: "/e", component: HomePage },
	{ path: "/", component: () => import("./pages/HomePage") },
	{ path: "/about", component: () => import("./pages/AboutPage") },
]
export default new VueRouter({
	mode: "history",
	routers,
})
