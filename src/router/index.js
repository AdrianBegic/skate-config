import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Boards from "../components/menu_board_brands.vue";
import Brand_boards from "../components/menu_boards_select.vue";
import Trucks from '../components/menu_trucks_brands.vue';
import Brand_trucks from '../components/menu_trucks_select.vue';
import Wheels from '../components/menu_wheels_brands.vue';
import Brand_wheels from '../components/menu_wheels_select.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:id",
    name: "Parts",
    component: Trucks,
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
    path: "/trucks",
    name: "Trucks",
    component: Trucks,
  },
  {
    path: "/trucks/:id",
    name: "TruckBrand",
    component: Brand_trucks,
  },
  {
    path: "/wheels",
    name: "Wheels",
    component: Wheels,
  },
  {
    path: "/wheels/:id",
    name: "WheelBrand",
    component: Brand_wheels,
  },
  
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
