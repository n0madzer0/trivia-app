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
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
  // background-color: #e8ebf1;
  
}
</style>
