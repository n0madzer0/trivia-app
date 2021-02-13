<template>
  <div class="card-main">
    <div class="card-container">
      <div class="card-header">
        <h2>Select your game options</h2>
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
          <label for="selectCategories">Select a Category:</label>
          <select id="selectCategories" name="categories">
            <option disabled value="">--Choose a category--</option>
            <option
              v-for="(item, key) in categories"
              :key="key"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="nicknameInput">
          <label for="nickname">Enter Nickname:</label><br />
          <input id="nickname" type="text" />
        </div>
        <!-- <div class="sessionToken">
          <input type="checkbox" v-model="isChecked" />
          <input type="text" v-model="sessionToken" :disabled="isChecked" placeholder="disabled if box checked" />
        </div> -->
      </div>
      <div class="card-footer">
        <button @click="previousCard">Go back</button>
        <button @click="optionsNextCard">Lets gooooo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["previousCard", "optionsNextCard", "getCategories"]),
  },
  computed: {
    ...mapState([]),
    ...mapGetters(["currentIndex", "categories"]),
  },
  mounted() {
    this.getCategories();
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
  border-radius: 6px;
  background-color: $color-3;

  &:hover {
    box-shadow: 0px 0px 50px 30px $color-4;
  }
  .card-container {
    padding: 2px 16px;
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    height: 100%;

    > * {
      width: 100%;
      padding: 10px;
    }

    .card-header {
      border-bottom: 5px solid $color-2;
      max-height: 50px;
      justify-content: center;
    }

    .card-body {
    }

    .card-footer {
      position: relative;

      .next-button {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 20px;
        margin-right: 10px;
        padding: 10px;
        border-radius: 6px;
      }
    }
  }
}
</style>
