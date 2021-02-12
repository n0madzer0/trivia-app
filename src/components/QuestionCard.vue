<template>
  <div class="card-question-group">
    <div class="card-main">
      <div class="card-container">
        <div class="card-header">
          <h2>Question #{{ questionNumber }}</h2>
        </div>
        <div class="card-body">
          <p>How are you feeling today?</p>
          <label>
            <input type="radio" value="great" v-model="howAreYouFeeling" />
            great
          </label>
          <label>
            <input type="radio" value="wonderful" v-model="howAreYouFeeling" />
            wonderful
          </label>
          <label>
            <input type="radio" value="fantastic" v-model="howAreYouFeeling" />
            fantastic
          </label>
          <p>
            I am also feeling <em>{{ howAreYouFeeling }}</em> today.
          </p>
        </div>
        <div class="card-footer">
          <button @click="submitAnswer()">Submit Answer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      howAreYouFeeling: ""
    }
  },
  methods: {
    ...mapActions(["nextCard"]),
  },
  computed: {
    ...mapState([]),
    ...mapGetters(["currentIndex", "questionNumber"]),
  },
};
</script>

<style lang="scss" scoped>
.card-question-group {
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
}
</style>
