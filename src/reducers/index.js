import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";
import selectedReducer from "./selectedReducer";
import fetchShopReducer from "./fetchShopReducer";
import paymentReducer from "./paymentReducer";
import getLeaderboardReducer from "./getLeaderboardReducer";

const rootReducer = combineReducers({
  gameModeReducer,
  selectedReducer,
  fetchShopReducer,
  paymentReducer,
  getLeaderboardReducer,
});

export default rootReducer;
