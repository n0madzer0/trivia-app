<template>
  <div class="card-main">
    <div class="card-container">
      <div class="card-header">
        <h2>Welcome to Trivia</h2>
      </div>
      <div class="card-body">
        <div>
          I'm glad you are here. I've spent tireless hours creating this trivia
          game and writing out trivia questions (not really...)
        </div>
        <div>
          Instructions: Always multiple choice with 4 options You will be given
          2 minutes Do not click back button on browser or you will be booted
        </div>
        <div>Rules:</div>
      </div>
      <div class="card-footer">
        <button class="next-button" @click="nextCard">
          Let's Get Started!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["nextCard"]),
  },
  computed: {
    ...mapState([]),
    ...mapGetters(["currentIndex"]),
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
      }
    }
  }
}
</style>
