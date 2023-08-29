import { redirect } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3000";

export function actionLogin(payload) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "post",
        url: API_URL + "/login",
        data: payload,
      });
      if (data.statusCode >= 400) {
        throw { message: data.message };
      }
      data.access_token
        ? localStorage.setItem("access_token", data.access_token)
        : null;
      data.access_token ? localStorage.setItem("email", payload.email) : null;
      redirect("/play");
    } catch (error) {
      dispatch(setErrorMessage(error.message))
    }
  };
}

export function actionRegister(payload) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios({
        method: "post",
        url: API_URL + "/register",
        data: payload,
      });
      if (data.statusCode >= 400) {
        throw { message: data.message };
      }
    } catch (error) {
      alert(error.message, "failed");
      dispatch(setErrorMessage(error.message))
    }
  };
}
