<template>
<Nav :navLinks="navLinks" :navConfig="navConfig" />
<div class="home">
    <div class="filler">
    </div>
</div>
<router-view></router-view>
</template>

<script>
import Nav from './components/navBar.vue'

export default {
    name: "Home",
    components: {
      Nav,
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
</style>
