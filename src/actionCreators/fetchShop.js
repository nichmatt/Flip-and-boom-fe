import { FETCHSHOP, FILTERITEMSHOP } from "../actionType";
import axios from "axios";
export function actionSetShopData(payload) {
  return {
    type: FETCHSHOP,
    payload,
  };
}

export function actionFilterShopData(payload) {
  return {
    type: FILTERITEMSHOP,
    payload,
  };
}

export function fetchShopData() {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:3000/items", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      const result = await response.data;
      //   console.log(result, "<<<<<<");
      dispatch(actionSetShopData(result));
    } catch (error) {
      console.log(error);
    }
  };
}
