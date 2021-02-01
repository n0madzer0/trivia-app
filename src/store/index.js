import { createStore } from 'vuex'

export default createStore({
  state: {
    currentIndex: 0,
    questionNumber: 1
  },
  actions: {
    incrementCurrentIndex(context) {
      context.commit('incrementCurrentIndex');
    },
    decrementCurrentIndex(context) {
      context.commit('decrementCurrentIndex');
    },
    incrementQuestionNumber(context) {
      context.commit('incrementQuestionNumber');
    },
    decrementQuestionNumber(context) {
      context.commit('decrementQuestionNumber');
    }
  },
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
    }
  },

  getters: {
    currentIndex: (state) => state.currentIndex,
    questionNumber: (state) => state.questionNumber
  },

  modules: {
  }
})
