import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Boards from "../components/menu_board_brands.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/boards",
    name: "Boards",
    component: Boards,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
