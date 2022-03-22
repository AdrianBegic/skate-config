import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Boards from "../components/menu_board_brands.vue";
import Brand_boards from "../components/menu_boards_select.vue";
import skateboard_render from '../components/skateboard_render.vue';

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
  {
    path: "/boards/:id",
    name: "BoardBrand",
    component: Brand_boards,
  },
  {
    path: "/:id",
    name: "Select",
    component: skateboard_render,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
