import Vue from "vue"
import "bootstrap/dist/css/bootstrap.css"
import router from "./router"
import App from "./App.vue"

// import global component:
import MyButton from "@/components/UI/MyButton"
Vue.component("MyButton", MyButton)

import MyInput from "@/components/UI/MyInput"
Vue.component("MyInput", MyInput)

import MyDialog from "@/components/UI/MyDialog"
Vue.component("MyDialog", MyDialog)

import MySelect from "@/components/UI/MySelect"
Vue.component("MySelect", MySelect)

// import global component2:
// const components = {
// 	MyButton: () => import("@/components/UI/MyButton"),
// 	MyInput: () => import("@/components/UI/MyInput"),
// }

// Object.entries(components).forEach(([MyButton, component]) => Vue.component(MyButton, component))
Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app")
