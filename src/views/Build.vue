<template>
  <div class="main">
    <h1 class="title">YOUR BUILD!</h1>
    <skateboard_render />
    <div class="details">
    <div class="board" v-for="boardsDecks in boardsDecks" :key="boardsDecks.id">
    {{boardsDecks.Name}}
    <img :src="boardsDecks.Thumb">
    </div>
    <div class="truck" v-for="trucksParts in trucksParts" :key="trucksParts.id">
    {{trucksParts.Name}} 
    <img :src="trucksParts.Thumb">
    </div>
    <div class="wheel" v-for="wheelsParts in wheelsParts" :key="wheelsParts.id"> 
    {{wheelsParts.Name}} 
    <img :src="wheelsParts.Thumb">
    
    </div>
    </div>
  </div>
</template>

<script>
import skateboard_render from "../components/skateboard_render.vue";
import {
    db
} from "../firebaseDb";
import {mapState} from 'vuex'

export default {
  name: "Build",
  components: {
    skateboard_render,
  },
  data() {
        return {
            boardsDecks: [],
            trucksParts:[],
            wheelsParts:[],
        };
    },

    computed: mapState({
  currentBoard: state => state.currentBoard,
  currentTruck: state => state.currentTruck,
  currentWheel: state => state.currentWheel,
})            ,
    created() {
        db.
        collection("boardsDecks")
            .where("image", "==", this.$store.state.currentBoard)
            .onSnapshot((snapshotChange) => {
                this.boardsDecks = [];
                snapshotChange.forEach((doc) => {
                    this.boardsDecks.push({
                        key: doc.id,
                        Image: doc.data().image,
                        ID: doc.data().ID,
                        Name: doc.data().name,
                        Thumb: doc.data().thumb,
                    });
                });
            });
             db.
        collection("trucksParts")
            .where("image", "==", this.$store.state.currentTruck)
            .onSnapshot((snapshotChange) => {
                this.trucksParts = [];
                snapshotChange.forEach((doc) => {
                    this.trucksParts.push({
                        key: doc.id,
                        Image: doc.data().image,
                        ID: doc.data().ID,
                        Name: doc.data().name,
                        Thumb: doc.data().thumb,
                    });
                });
            });
             db.
        collection("wheelsParts")
            .where("image", "==", this.$store.state.currentWheel)
            .onSnapshot((snapshotChange) => {
                this.wheelsParts = [];
                snapshotChange.forEach((doc) => {
                    this.wheelsParts.push({
                        key: doc.id,
                        Image: doc.data().image,
                        ID: doc.data().ID,
                        Name: doc.data().name,
                        Thumb: doc.data().thumb,
                    });
                });
            });
    },

};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/build.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.title {
  top: 10vh;
  position: relative;
  margin: 0 auto;
  color: #000;
  font-size: 4em;
}

.details{
    border: solid 5px #000;
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100vw;
}

.board{
    color: #fff;
    font-size: 3em;
    margin: 0 auto;
     border: solid 5px green;
     position: relative;
}
.truck{
    color: #000;
     border: solid 5px red;
     position: relative;
     display: inline-block;
     font-size: 3em;
    margin: 0 auto;
}
.wheel{
    color: #000;
     border: solid 5px blue;
     position: relative;
}
</style>
