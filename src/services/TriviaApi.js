//https://opentdb.com/api_config.php

//https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple

import axios from "axios";

const baseUrl = "https://opentdb.com";

export default {
  //Token lasts for 6 hours
  //Using the same token ensures no duplicated questions
  getSessionToken() {
    return axios
      .get(baseUrl + "/api_token.php", {
        params: {
          command: "request",
        },
      })
      .then((response) => {
        return response.data.token;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getQuestions(token, amount) {
    return axios
      .get(baseUrl + "/api.php", {
        params: {
          amount: amount,
          token: token,
          type: "multiple",
        },
      })
      .then((response) => {
        return response.data.results;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getCategories() {
    return axios
      .get(baseUrl + "/api_category.php", {})
      .then((response) => {
        return response.data.trivia_categories;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
