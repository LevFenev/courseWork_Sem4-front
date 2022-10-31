import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "@/store";
import router from "@/router";
import App from './App.vue'
const app = createApp(App)
app.use(VueAxios,axios)
app.use(store)
app.use(router)
app.mount('#app')