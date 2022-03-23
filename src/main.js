import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex" 



const store = createStore({
	state: {
        currentBoard: "https://i.ibb.co/cvLMgdY/default-board.webp",
        currentTruck: "https://i.ibb.co/FzJJjdp/default-truck.webp",
        currentWheel: "https://i.ibb.co/nsmYHVH/default-wheels.webp",
	},
      mutations: {
        UPDATE_BOARD(state, currentBoard) {
          state.currentBoard = (currentBoard);
        },
        UPDATE_TRUCK(state, currentTruck) {
          state.currentTruck = (currentTruck);
        },
        UPDATE_WHEEL(state, currentWheel) {
          state.currentWheel = (currentWheel);
        },
      },
      actions: {
        changeBoard({ commit }, currentBoard) {
          commit('UPDATE_BOARD', currentBoard);
        },
        changeTruck({ commit }, currentTruck) {
          commit('UPDATE_TRUCK', currentTruck);
        },
        changeWheel({ commit }, currentWheel) {
          commit('UPDATE_WHEEL', currentWheel);
        },
      },
});

const app = createApp(App);
app.use(store)
app.use(router)
app.mount("#app");
 
