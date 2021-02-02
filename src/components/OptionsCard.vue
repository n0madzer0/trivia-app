<template>
  <div class="card-main">
    <div class="card-container">
      <div class="card-header">
        <h2>Select your options {{ currentIndex }}</h2>
      </div>
      <div class="card-body">
        <span></span>
        <div class="difficultySelector" style="width: 200px">
          <label for="selectDifficulty">Select Difficulty:</label>
          <select id="selectDifficulty" name="difficulty" v-model="difficulty">
            <option disabled value="">--Choose a difficulty--</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div class="categorySelector" style="width: 200px">
          <label for="selectCategories">Select Category:</label>
          <select id="selectCategories" name="categories" v-model="categories">
            <option disabled value="">--Choose categories--</option>
            <option v-for="(item, key) in categories" :key="key" :value="key">
              {{ item }}
            </option>
          </select>
          <h3>{{ categories }}</h3>
        </div>
        <div class="sessionToken">
          <input type="checkbox" v-model="isChecked" />
          <input
            type="text"
            v-model="sessionToken"
            :disabled="isChecked"
            placeholder="disabled if box checked"
          />
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
import { getCategories, getSessionToken } from "@/services/TriviaApi";

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
    getCategories() {
      const data = getCategories();
      if (data) {
        return data;
      }
    },
    getSessionToken() {
      const data = getSessionToken();
      if (data) {
        console.log(data);
        return data;
      }
    },
  },
  computed: {
    ...mapGetters(["currentIndex"]),
  },
  mounted() {
    getSessionToken();
    getCategories();
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

    .card-footer {
    }
  }
}
</style>
