<template>
  <div class="card-main">
    <div class="card-container">
      <div class="card-header">
        <h2>Select your options {{ currentIndex }}</h2>
      </div>
      <div class="card-body">
        <span></span>
        <div class="difficultySelector" style="width: 200px">
          <label for="selectDifficulty">Difficulty:</label>
          <select id="selectDifficulty" name="difficulty" v-model="difficulty">
            <option disabled value="">--Choose a difficulty--</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div class="categorySelector" style="width: 200px">
          <label for="selectCategories">Categories:</label>
          <select
            multiple
            id="selectCategories"
            name="categories"
            v-model="categories"
          >
            <option disabled value="">--Choose categories--</option>
            <option value="Sports">Sports</option>
            <option value="History">History</option>
            <option value="Art">Art</option>
          </select>
        </div>
      </div>
      <div class="card-footer">
        <button @click="prev()">prev</button>
        <button @click="next()">Lets gooooo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      difficulty: "",
      categories: [],
    };
  },
  methods: {
    next() {
      this.$store.dispatch("incrementCurrentIndex");
    },
    prev() {
      this.$store.dispatch("decrementCurrentIndex");
    },
  },
  computed: {
    ...mapGetters(["currentIndex"]),
  },
  mounted() {
    console.log("getCategories and difficulties");
  },
};
</script>

<style lang="scss" scoped>
.card-main {
  margin-top: 100px;
  width: 600px;
  min-width: 400px;
  height: 400px;
  min-height: 400px;
  box-shadow: 0px 0px 50px 15px $color-4;
  transition: 0.3s;
  background-color: $color-3;

  &:hover {
    box-shadow: 0px 0px 50px 30px $color-4;
  }
  .card-container {
    padding: 2px 16px;

    .card-header {
      border-bottom: 5px solid $color-2;
      padding: 10px;
    }

    .card-body {
      padding: 10px;
    }
  }
}
</style>
