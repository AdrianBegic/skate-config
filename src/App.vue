<template>
<Nav :navLinks="navLinks" :navConfig="navConfig" />
<div class="home">
    <div class="filler">
    <skateboard_render id="board"> </skateboard_render>
    </div>
</div>
<div class="footer">
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
</router-view>
</div>
</template>

<script>
import Nav from './components/navBar.vue'
import skateboard_render from './components/skateboard_render.vue'

export default {
    name: "Home",
    components: {
        Nav,
        skateboard_render,
    },

    data() {
        return {
            currentBoard: 'Baker Black',
        }
    },

    setup() {

        const navConfig = ({
            navBg: "#000",
            linkFont: "Sans-serif",
        });
        return {
            navConfig
        };
    },

   

};
</script>

<style>
body {
    margin: 0;

}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

.filler {
    background-image: url("./assets/back.jpg");
    background-size: cover;
    height: 100vh;
    width: 100vw;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.footer {
    width: 100%;
    position: fixed;
    background: #000;
    bottom: 0;
}

#board {
  display: block;
  margin: 0 auto;
  width: 40vw;
}
</style>
