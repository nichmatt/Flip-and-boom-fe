import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";
import selectedReducer from "./selectedReducer";
import fetchShopReducer from "./fetchShopReducer";
import paymentReducer from "./paymentReducer";
import userReducer from "./userReducer";
import newsReducer from "./newReducer";

const rootReducer = combineReducers({
  gameModeReducer,
  selectedReducer,
  fetchShopReducer,
	paymentReducer,
  userReducer,
  newsReducer,
  
  
});

export default rootReducer;
