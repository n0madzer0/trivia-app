<template>
  <div class="nav-container">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/About">About</router-link>
      <router-link to="/Trivia">Trivia</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
     
    };
  },
};
</script>
<style lang="scss" scoped>
.nav-container {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
}
</style>
