import { GETLEADERBOARD, FILTERLEADERBOARD } from "../actionType";
import axios from "axios";
import { setErrorMessage } from "./messageModal";

export function actionSetLeaderboardData(payload) {
  return {
    type: GETLEADERBOARD,
    payload,
  };
}

export function actionFilterLeaderboardData(payload) {
  return {
    type: FILTERLEADERBOARD,
    payload,
  };
}

export function getLeaderboard(difficulty = "easy") {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `http://localhost:3000/leaderboard?difficulty=${difficulty}`,
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      const result = await response.data;
      //   console.log(result);
      dispatch(actionSetLeaderboardData(result));
    } catch (error) {
      console.log(error);
      dispatch(setErrorMessage(error.response.data.message))
    }
  };
}
