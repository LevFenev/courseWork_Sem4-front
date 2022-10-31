import {createRouter,createWebHistory} from "vue-router";
import NewsSingle from "@/components/NewsSingle";
import MainPage from "@/components/MainPage";

const routes = [
    {
      path: "/",
      component: MainPage
    },

    {
        path: "/news/:id",
        component: NewsSingle
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})