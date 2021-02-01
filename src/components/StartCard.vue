<template>
  <div class="card-main">
    <div class="card-container">
      <div class="card-header">
        <h2>Welcome to Trivia</h2>
      </div>
      <div class="card-body">
        <span
          >I'm glad you are here. I've spent tireless hours creating this trivia
          game and writing out trivia questions (not really...)</span
        >
        <div>
          Instructions: Always multiple choice with 4 options You will be given
          2 minutes Do not click back button on browser or you will be booted
        </div>
        <div>Rules:</div>
      </div>
      <div class="card-footer"></div>
      <button @click="next()">Let's Get Started!</button>
    </div>
  </div>
  <!-- <button @click="$router.push('about')">Get Started</button> -->
  <!-- <router-link to="/foo" tag="button">Get Started</router-link> -->
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
      this.$store.dispatch("incrementCurrentIndex");
    },
    prev() {
      this.$store.dispatch("decrementCurrentIndex");
    },
  },
  computed: {
    ...mapGetters(["currentIndex"]),
  },
};
</script>

<style lang="scss" scoped>
.card-group {
  //START - Transition Animations
  .slide-leave-active,
  .slide-enter-active {
    transition: 1s;
  }
  .slide-enter {
    transform: translate(100%, 0);
  }
  .slide-leave-to {
    transform: translate(-100%, 0);
  }
  .slideback-leave-active,
  .slideback-enter-active {
    transition: 1s;
  }
  .slideback-enter {
    transform: translate(-100%, 0);
  }
  .slideback-leave-to {
    transform: translate(100%, 0);
  }
  //END - Transition Animations

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
