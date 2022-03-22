import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex" 



const store = createStore({
	state: {
        currentBoard: "Default",
	},
      mutations: {
        UPDATE_BOARD(state, currentBoard) {
          state.currentBoard = (currentBoard);
        },
      },
      actions: {
        changeBoard({ commit }, currentBoard) {
          commit('UPDATE_BOARD', currentBoard);
        },
      },
});

const app = createApp(App);
app.use(store)
app.use(router)
app.mount("#app");
 
