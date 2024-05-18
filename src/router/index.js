import { createRouter, createWebHistory } from "vue-router";

import HomeV from "../views/HomeV.vue"
import AboutV from "../views/AboutV.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeV
        },
        {
            path: "/about",
            name: "about",
            component: AboutV
        }
    ]
})

export default router