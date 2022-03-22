<template>
<div class="container" v-for="boardsDecks in boardsDecks" :key="boardsDecks.id">
    <img :src="boardsDecks.Image">
>
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";
import { mapGetters} from "vuex";

export default {
    name: "skateboard_render",
    data() {
        return {
            boardsDecks: [],
            currentBoard : this.$store.state.currentBoard,
        };
    },
computed: {
          ...mapGetters(["boardValue"]),
      boards() {
        return this.$store.state.currentBoard;
      },
    },
    created() {

        db.
            collection("boardsDecks")
            .where("ID", "==", this.currentBoard)
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
