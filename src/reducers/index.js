import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";
import selectedReducer from "./selectedReducer";
import paymentReducer from "./paymentReducer";

const rootReducer = combineReducers({
	gameModeReducer,
	selectedReducer,
	paymentReducer,
});

export default rootReducer;
