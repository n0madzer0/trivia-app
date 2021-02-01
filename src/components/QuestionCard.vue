<template>
  <transition-group>
    <div class="card-main">
      <div class="card-container">
        <div class="card-header">
          <h2>Question #{{ questionNumber }}</h2>
        </div>
        <div class="card-body">
          <span>dkj;afksdjflas;df;jsdakfljsd;fkjds;ldfkdasj;l</span>
        </div>
        <div class="card-footer">
          <button @click="prev()">prev</button>
          <button @click="next()">next</button>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      back: false,
    };
  },
  methods: {
    next() {
      this.$store.dispatch("incrementQuestionNumber");
    },
    prev() {
      this.$store.dispatch("decrementQuestionNumber");
    },
  },
  computed: {
    ...mapGetters(['questionNumber'])
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
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
