import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";
import selectedReducer from "./selectedReducer";
import fetchShopReducer from "./fetchShopReducer";
import paymentReducer from "./paymentReducer";

const rootReducer = combineReducers({
  gameModeReducer,
  selectedReducer,
  fetchShopReducer,
	paymentReducer,
});

export default rootReducer;
