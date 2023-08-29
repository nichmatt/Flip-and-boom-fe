import { redirect } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:3000";

export function actionLogin(payload) {
  return async (dispatch, getState) => {
    try {
      console.log(payload, "darii payload");
      const { data } = await axios({
        method: "post",
        url: API_URL + "/login",
        data: payload,
      });
      console.log(data, "<< data dari login");
      if (data.statusCode >= 400) {
        throw { message: data.message };
      }
      data.access_token
        ? localStorage.setItem("access_token", data.access_token)
        : null;
      data.access_token ? localStorage.setItem("email", payload.email) : null;
      redirect("/play");
    } catch (error) {
      console.log(error.message, "ini error message nya");
      alert(error.message, "failed");
    }
  };
}

export function actionRegister(payload) {
  return async (dispatch, getState) => {
    try {
      console.log(payload, "darii payload");
      const { data } = await axios({
        method: "post",
        url: API_URL + "/register",
        data: payload,
      });
      console.log(data, "<< data dari login");
      if (data.statusCode >= 400) {
        throw { message: data.message };
      }
      //   data.access_token
      //     ? localStorage.setItem("access_token", data.access_token)
      //     : null;
      //   data.access_token ? localStorage.setItem("email", payload.email) : null;
      //   redirect("/play");
    } catch (error) {
      console.log(error.message, "ini error message nya");
      alert(error.message, "failed");
    }
  };
}
