import axios from "axios";
import { fetchUserProfile, setLoading } from "./fetchUserProfile";
import { API_URL } from "../config";
import { setErrorMessage } from "./messageModal";
import { MIDTRANSSETOKEN } from "../actionType";

export const getTokenMidtrans = (payload) => {
  return {
    type: MIDTRANSSETOKEN,
    payload,
  };
};

export function fetchGetTokenMidtrans(amount) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.post(
        API_URL + "/user/token-midtrans",
        { amount },
        {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        }
      );
      console.log(data.token, "ini response axios");
      dispatch(getTokenMidtrans(data.token));
    } catch (error) {
      console.log(error);
      dispatch(setErrorMessage(error.response.data.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchSuccesPayment(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.post(API_URL + "/user/topup", payload, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      // tampilkan ke modal
      console.log(data, "<<<<<< response server after payment");
      // dispatch user
      dispatch(fetchUserProfile());
    } catch (error) {
      console.log(error);
      dispatch(setErrorMessage(error.response.data.message));
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchBuyItem(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const { data, status } = await axios.post(API_URL + "/buyItem", payload, {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      console.log(data.message, "response setelah berhasil");
      console.log(status, "response"); // 201
    } catch (error) {
      // console.log(error.response.data.message);
      dispatch(setErrorMessage(error.response.data.message));
    } finally {
      dispatch(fetchUserProfile());
      dispatch(setLoading(false));
    }
  };
}
