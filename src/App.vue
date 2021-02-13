<template>
  <div>
    <div>
      <Navigation />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/structure/Navigation";
import Footer from "./components/structure/Footer";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/style.scss";
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // background-color: #919191;
  
}
</style>
