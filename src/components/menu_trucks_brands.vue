<template>
<div class="footer">
    <div class="card-carousel-wrapper">
        <div class="card-carousel">
            <div class="card-carousel--overflow-container">

                <div class="card-carousel-cards" :style="{
              transform: 'translateX' + '(' + currentOffset + 'px' + ')',
            }">
              
                    <div class="card-carousel--card">
                        <img id="brand" src="../assets/back.png" title="Back" @click="goBack" />
                    </div>
                    <div class="card-carousel--card" v-for="trucks in trucks" :key="trucks.id">
                    <router-link :to="{name: 'TruckBrand' , params : {id : trucks.ID}}">
                        <img id="brand" :src="trucks.Image" :title="trucks.Name" />
                        </router-link>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    db
} from "../firebaseDb";

export default {
    name: "menu_trucks_brands",
    data() {
        return {
            currentOffset: 0,
            windowSize: 12,
            paginationFactor: 170,
            trucks: [],
        };
    },

    created() {
        db.collection("trucks").onSnapshot((snapshotChange) => {
            this.trucks = [];
            snapshotChange.forEach((doc) => {
                this.trucks.push({
                    key: doc.id,
                    Image: doc.data().image,
                    Name: doc.data().name,
                    ID: doc.data().ID,
                });
            });
        });

        

    },

    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    },

    computed: {
        atEndOfList() {
            return (
                this.currentOffset <=
                this.paginationFactor * -1 * (this.truckss.length - this.windowSize)
            );
        },
        atHeadOfList() {
            return this.currentOffset === 0;
        },
    },
};
</script>

<style scoped>

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  margin-bottom: 0;
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
    align-truckss: center;
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
    overflow-x: scroll;
    width: inherit;
}

.card-carousel--nav__left,
.card-carousel--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid #42b883;
    border-right: 2px solid #42b883;
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
}

.card-carousel--nav__left[disabled],
.card-carousel--nav__right[disabled] {
    border-color: #fff;
}

.card-carousel--nav__left {
    transform: rotate(-135deg);
}

.card-carousel--nav__left:active {
    transform: rotate(-135deg) scale(0.9);
}

.card-carousel--nav__right {
    transform: rotate(45deg);
}

.card-carousel--nav__right:active {
    transform: rotate(45deg) scale(0.9);
}

.card-carousel-cards {
    display: flex;
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

.card-carousel-cards .card-carousel--card--footer {
    border-top: 0;
    padding: 7px 15px;
}

.card-carousel-cards .card-carousel--card--footer p {
    padding: 3px 0;
    margin: 0;
    margin-top: 2px;
    font-size: 19px;
    font-weight: 500;
    color: #2c3e50;
    user-select: none;
}

.card-carousel-cards .card-carousel--card--footer p.tag {
    font-size: 11px;
    font-weight: 300;
    padding: 4px;
    background: rgba(40, 44, 53, 0.06);
    display: inline-block;
    position: relative;
    margin-left: 4px;
    color: #666a73;
}

.card-carousel-cards .card-carousel--card--footer p.tag:before {
    content: "";
    float: left;
    position: absolute;
    top: 0;
    left: -12px;
    width: 0;
    height: 0;
    border-color: transparent rgba(40, 44, 53, 0.06) transparent transparent;
    border-style: solid;
    border-width: 8px 12px 12px 0;
}

.card-carousel-cards .card-carousel--card--footer p.tag.secondary {
    margin-left: 0;
    border-left: 1.45px dashed white;
}

.card-carousel-cards .card-carousel--card--footer p.tag.secondary:before {
    display: none !important;
}

.card-carousel-cards .card-carousel--card--footer p.tag:after {
    content: "";
    position: absolute;
    top: 8px;
    left: -3px;
    float: left;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: white;
    box-shadow: 0px 0px 0px #004977;
}
</style>
