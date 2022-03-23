<template>
  <div class="footer">
    <div class="card-carousel-wrapper">
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div
            class="card-carousel-cards"
            :style="{
              transform: 'translateX' + '(' + currentOffset + 'px' + ')',
            }"
          >
            <div class="card-carousel--card">
              <back_button_menu />
            </div>

            <div class="card-carousel--card2">
              <img id="brand" :src="wheels.Image" :title="wheels.Name" />
            </div>

            <div
              class="card-carousel--card"
              v-for="boardsDecks in boardsDecks"
              :key="boardsDecks.id"
              @click="shout" 
            >
              <img
                id="brand"
                :src="boardsDecks.Thumb"
                :title="boardsDecks.Name"
                :bind= "boardsDecks.Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";
import back_button_menu from "../components/back_button_menu.vue";


export default {
  name: "menu_wheels_select",
  components: {
    back_button_menu,
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 12,
      paginationFactor: 170,
      wheels: [],
      boardsDecks: {},
    };
  },
  
methods: {
    shout (event) {
            this.boardSelect = event.target.getAttribute('bind');         
               console.log(this.boardSelect);      
            this.$store.dispatch('changeBoard', this.boardSelect);
        },

  },
  created() {
    db.collection("wheels")
      .where("ID", "==", this.$route.params.id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.wheels = {
            key: doc.id,
            Image: doc.data().image,
            Name: doc.data().name,
            ID: doc.data().ID,
          };
        });
      });

    db.collection("boardsDecks")
      .where("ID", "==", this.$route.params.id)
      .onSnapshot((snapshotChange) => {
        this.boardsDecks = [];
        snapshotChange.forEach((doc) => {
          this.boardsDecks.push({
            key: doc.id,
            Image: doc.data().image,
            Name: doc.data().name,
            Thumb: doc.data().thumb,
            ID: doc.data().ID,
          });
        });
      });
  },

  
};
</script>

<style scoped>
a {
  display: inherit;
}

#brand {
  width: 100px;
  height: 100px;
  padding: 10px;
}

.footer {
  width: 100%;
  position: fixed;
  background: #000;
  bottom: 0;
}

.card-carousel-wrapper {
  display: flex;
  align-boards: center;
  justify-content: center;
  margin: 20px 0 20px;
  color: #666a73;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 90vw;
}

.card-carousel--overflow-container {
  width: inherit;
}

.card-carousel-cards {
  display: inline-flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}

.card-carousel-cards .card-carousel--card2 {
  margin: 0 10px;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
    0 2px 2px 0 rgba(40, 44, 53, 0.08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}

.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}

.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}

.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-radius: 10px;
  transition: opacity 150ms linear;
  user-select: none;
}

.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
</style>
