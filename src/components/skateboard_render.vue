<template>
<div class="container" v-for="boardsDecks in boardsDecks" :key="boardsDecks.id">
    <img :src="boardsDecks.Image">
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
        };
    },
    
    computed: mapState({
  currentBoard: state => state.currentBoard
})            ,
    created() {
        db.
        collection("boardsDecks")
            .where("name", "==", this.$store.state.currentBoard)
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
            
    },

};
</script>

<style scoped>
.container {
    height: auto;
    width: auto;
}
</style>
