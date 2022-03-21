<template>
<div class="container" v-for="boardsDecks in boardsDecks" :key="boardsDecks.id">
    <img :src="boardsDecks.Image" >
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";

export default {
    name: "skateboard_render",
    props:{
        currentBoard: {
            type: String,
            default: 'Default'
        }
    },
    data() {
        return {
            boardsDecks: [],
          
        };
    },

    created() {

        db.
            collection("boardsDecks")
            
            .where("name", "==", this.currentBoard)
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
