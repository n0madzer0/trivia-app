<template>
  <div class="card-question-group">
    <transition-group>
      <div class="card-main">
        <div class="card-container">
          <div class="card-header">
            <h2>This is the end</h2>
          </div>
          <div class="card-body">
            <span>dkj;afksdjflas;df;jsdakfljsd;fkjds;ldfkdasj;l</span>
          </div>
          <div class="card-footer">
            <!-- <button @click="submitAnswer()">Submit Answer</button> -->
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  methods: {
    submitAnswer() {
      this.$store.dispatch("incrementQuestionNumberAction");
      if(this.questionNumber === 4) {
        console.log("Q4 increment index");
        this.$store.dispatch("incrementCurrentIndexAction")
      }
    },
  },
  computed: {
    ...mapGetters(["questionNumber", "currentIndex"])
  }
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
