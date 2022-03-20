<template>
<Nav :navLinks="navLinks" :navConfig="navConfig"/>
  <div class="home">
  <div class="filler">
</div>
    <Carousel />
  </div>
</template>

<script>
import Nav from '../components/navBar.vue'
import Carousel from "@/components/Carousel.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    Nav,
  },


setup() {
        

        const navConfig = ({
            
            navBg: "#000",
            linkFont: "Sans-serif",
            linkColor: "#fff",
            linkColorHover: "red",
            navLogo: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
        });

        return {
           navConfig
        };
    },



};
</script>

<style scoped>
  .filler {
  background-image: url("../assets/back.jpg");
  background-size: cover;
  height: 100vh;
  width: 100vw;
}
</style>
