//https://opentdb.com/api_config.php

//https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple

import axios from "axios";
const baseUrl = "https://opentdb.com";
const questionType = "multiple";

//Token lasts for 6 hours
//Using the same token ensures no duplicated questions
function getSessionToken() {
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
}


function getQuestions(token, amount) {
  return axios
    .get(baseUrl + "/api.php", {
      params: {
        amount: amount,
        token: token,
        type: questionType,
      },
    })
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getSessionToken, getQuestions };



// Code 0: Success Returned results successfully.
// Code 1: No Results Could not return results. The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.)
// Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)
// Code 3: Token Not Found Session Token does not exist.
// Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.