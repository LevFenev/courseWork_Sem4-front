import {createRouter,createWebHistory} from "vue-router";
import NewsSingle from "@/components/NewsSingle";

const routes = [
    {
        path: "/events/:id",
        component: {template: "<div>Одно мероприятие {{$route.params.id}}</div>"}
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