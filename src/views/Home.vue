<template>
  <div class="home">
    <div class="card-group">
      <transition-group :name="back ? 'slideback' : 'slide'">
        <div v-if="currentIndex === 0">
          <StartCard />
        </div>
        <div v-if="currentIndex === 1">
          <OptionsCard />
        </div>
        <div v-if="currentIndex === 2">
          <LoadingCard />
        </div>
        <div v-if="currentIndex === 3">
          <QuestionCard />
        </div>
      </transition-group>
      <!-- <button @click="prev()">prev</button>
      <button @click="next()">next</button> -->
      <!-- <button @click="$router.push('about')">Get Started</button> -->
      <!-- <router-link to="/foo" tag="button">Get Started</router-link> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StartCard from "@/components/StartCard";
import OptionsCard from "@/components/OptionsCard";
import LoadingCard from "@/components/LoadingCard";
import QuestionCard from "@/components/QuestionCard";

export default {
  components: {
    StartCard,
    OptionsCard,
    LoadingCard,
    QuestionCard,
  },
  methods: {},
  computed: {
    ...mapGetters(["currentIndex"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;

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
}
</style>
