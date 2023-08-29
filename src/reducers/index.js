import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";
import fetchShopReducer from "./fetchShopReducer";
import paymentReducer from "./paymentReducer";
import getLeaderboardReducer from "./getLeaderboardReducer";
import userReducer from "./userReducer";
import newsReducer from "./newReducer";
import settingReducer from "./settingReducer";

const rootReducer = combineReducers({

  gameModeReducer,
  fetchShopReducer,
  paymentReducer,
  getLeaderboardReducer,
  userReducer,
  newsReducer,
  settingReducer,
});

export default rootReducer;
