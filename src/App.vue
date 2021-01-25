<template>
  <div>
    <div>
      <navigation />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}

</style>
