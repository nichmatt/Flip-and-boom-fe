import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";
import selectedReducer from "./selectedReducer";
import fetchShopReducer from "./fetchShopReducer";
import paymentReducer from "./paymentReducer";
import getLeaderboardReducer from "./getLeaderboardReducer";
import userReducer from "./userReducer";
import newsReducer from "./newReducer";

const rootReducer = combineReducers({
  gameModeReducer,
  selectedReducer,
  fetchShopReducer,
  paymentReducer,
  getLeaderboardReducer,
  userReducer,
  newsReducer,
  
});

export default rootReducer;
