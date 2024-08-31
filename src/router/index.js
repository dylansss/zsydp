import { createRouter, createWebHashHistory } from "vue-router"

const MapAnimate = () => import("@/views/map-animate/map.vue")
const Detail = () => import("@/views/map-animate/detail.vue")
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/three-3d-map",
      component: MapAnimate,
    },
    {
      path: "/three-3d-map",
      component: MapAnimate,
    },
    {
      path: "/detail/:id",
      name: 'Detail',
      component: Detail,
    },

    {
      path: "/:pathMatch(.*)",
      redirect: "/",
    },
  ],
})

export default router
