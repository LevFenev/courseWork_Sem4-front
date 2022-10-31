import {createRouter,createWebHistory} from "vue-router";
import NewsSingle from "@/components/NewsSingle";
import MainPage from "@/components/MainPage";

const routes = [
    {
      path: "/courseWork_Sem4-front/",
      component: MainPage
    },

    {
        path: "/courseWork_Sem4-front/news/:id",
        component: NewsSingle
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
