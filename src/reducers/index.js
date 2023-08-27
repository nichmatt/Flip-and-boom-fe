import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";
import selectedReducer from "./selectedReducer";

const rootReducer = combineReducers({
	gameModeReducer,
	selectedReducer,
});

export default rootReducer;
