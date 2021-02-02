<template>
  <div class="card-main">
    <div class="card-container">
      <div class="card-header">
        <h2>Loading you questions</h2>
      </div>
      <div class="card-body">
        <span>dkj;afksdjflas;df;jsdakfljsd;fkjds;ldfkdasj;l</span>
      </div>
      <div class="card-footer">
        <button @click="previousCard">I want to change something</button>
        <button @click="nextCard">Are you ready?</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { getQuestions } from "@/services/TriviaApi";

export default {
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(["nextCard"]),
    getQuestions() {
      const data = getQuestions("token", 10);
      if (data) {
        return data;
      }
    }
  },
  computed: {
    ...mapState([]),
    ...mapGetters(["currentIndex"])
  }
  // mounted() {
  //   getSessionToken()
  //     .then(response => {
  //       this.sessionToken = response;
  //       this.loading = false;
  //       this.timerCount = 30; //Need to track token expiration and time to answer question
  //     })
  //     .then(response => {
  //       api.getQuestions(response, 9).then(response => {
  //         this.apiResult = response;
  //         this.mapResults(response);
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
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
