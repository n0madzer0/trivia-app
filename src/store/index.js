import { createStore } from "vuex";

export default createStore({
  // put variables and collections
  state: {
    currentIndex: 0,
    questionNumber: 1,
    questions: [],
    categories: [],
    totalQuestionCount: 10,
    sessionToken: "",
    previousCardEnabled: true
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
    }
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
    startGame({commit}) {
      commit("incrementQuestionNumber");
      commit("disablePreviousCard");
    },
    nextCard({commit}) {
      commit("incrementCurrentIndex");
    },
    previousCard({commit}) {
      commit("decrementCurrentIndex");
    },
  },

  getters: {
    currentIndex: (state) => state.currentIndex,
    questionNumber: (state) => state.questionNumber,
    sessionToken: (state) => state.sessionToken
  },

  modules: {}
});
