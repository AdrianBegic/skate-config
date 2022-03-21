<template>
  
    <img id="brand" src="../assets/back.png" title="Back" @click="goBack" />

</template>

<script>


export default {
  name: "back_button_menu",
  data() {
    return {};
  },
  methods: {
        goBack() {
            return this.$router.go(-1)
        }
    },
};
</script>

<style scoped>
#brand {
  width: 200px;
  height: 200px;
  padding: 10px;
}
</style>
