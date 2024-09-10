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
      // beforeEnter: (to, from, next) => {
      //   console.log(from, 'from');
        
      //   if (from.path.includes('/detail')) {
      //     window.location.reload(); // 强制刷新
      //   }
      //   next();
      // },
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
router.beforeEach((to, from, next) => {
  console.log(to, from, 'to, from');
  
  if (to.path === "/three-3d-map" && from.path.includes('/detail')) {
    console.log(11111);
    
    to.meta.shouldReload = true;  // 设置 meta 数据来标识需要重载
  }
  next();
});
export default router
