import axios from "axios";
import { createStore } from "vuex";

const baseUrl = "https://opentdb.com";
// const questionType = "multiple";

export default createStore({
  // put variables and collections
  state: {
    currentIndex: 0,
    questionNumber: 1,
    questions: [],
    categories: [],
    categorySelected: 0,
    totalQuestionCount: 10,
    sessionToken: "",
    previousCardEnabled: true,
    difficultySelected: "easy",
  },
  // sychronous functions for changing state e.g. add, edit, delete
  // no business logic in mutations
  mutations: {
    incrementCurrentIndex(state) {
      state.currentIndex++;
    },
    decrementCurrentIndex(state) {
      state.currentIndex--;
    },
    incrementQuestionNumber(state) {
      state.questionNumber++;
    },
    decrementQuestionNumber(state) {
      state.questionNumber--;
    },
    disablePreviousCard(state) {
      state.previousCardEnabled = false;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setSessionToken(state, token) {
      state.sessionToken = token;
    },
    setQuestions(state, questions) {
      state.questions = questions;
    },
  },
  //asynchronous functions that can call one or more mutation functions
  // Business logic in actions
  // Call APIs here
  // Call with this.$store.dispatch("actionName")
  // context.commit: commit a mutation
  // context.state: access state
  // context.getters: access getters
  actions: {
    // Async example
    // incrementAsync: async({ commit }) => {
    //   return await setTimeout(() => { commit('increment') }, 1000);
    // }
    startGame({ commit }) {
      commit("incrementQuestionNumber");
      commit("disablePreviousCard");
    },
    nextCard({ commit }) {
      commit("incrementCurrentIndex");
    },
    previousCard({ commit }) {
      commit("decrementCurrentIndex");
    },
    submitAnswer({ commit }) {
      commit("incrementQuestionNumber");
    },
    optionsNextCard({commit}) {
      commit("incrementCurrentIndex");
      this.getSessionToken();
    },
    //Token lasts for 6 hours
    //Using the same token ensures no duplicated questions
    getSessionToken({ commit }) {
      axios
        .get(baseUrl + "/api_token.php", {
          params: {
            command: "request",
          },
        })
        .then((response) => {
          commit("setSessionToken", response.data.token);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getCategories({ commit }) {
      axios
        .get(baseUrl + "/api_category.php")
        .then((response) => {
          commit("setCategories", response.data.trivia_categories);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getQuestions({ commit }) {
      axios
        .get(baseUrl + "/api.php", {
          params: {
            amount: 10,
            token: this.sessionToken,
            type: "multiple",
            category: this.categorySelected,
            difficulty: this.difficultySelected,
          },
        })
        .then((response) => {
          commit("setQuestions", response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  getters: {
    currentIndex: (state) => state.currentIndex,
    questionNumber: (state) => state.questionNumber,
    sessionToken: (state) => state.sessionToken,
    categories: (state) => state.categories,
  },

  modules: {},
});
