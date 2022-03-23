<template>
<div class="container" v-for="boardsDecks in boardsDecks" :key="boardsDecks.id">
<div id="board-cont">
    <img id="board" :src="this.$store.state.currentBoard">
    <img id="truck-one" :src="this.$store.state.currentTruck">
    <img id="truck-two" :src="this.$store.state.currentTruck">
</div>
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";
import {mapState} from 'vuex'

export default {
    name: "skateboard_render",
    data() {
        return {
            boardsDecks: [],
            trucksParts:[],
        };
    },

    computed: mapState({
  currentBoard: state => state.currentBoard,
  currentTruck: state => state.currentTruck,
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
                    });
                });
            });
    },

};
</script>

<style scoped>
.container {
    height: auto;
    width: 100vw;
}


#board{
    width: 40vw;
      position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#truck-one{
    width: 20vw;
      position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%) rotateY(180deg);
}
#truck-two{
    width: 20vw;
      position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-50%, -50%);
}
#wheel-one{
    width:20vw;
position: absolute;
  top: 40%;
  left: 60%;
  transform: translate(-50%, -50%);
}
</style>
