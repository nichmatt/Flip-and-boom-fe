import { combineReducers } from "redux";

import gameModeReducer from "./gameModeReducer";

const rootReducer = combineReducers({
	gameModeReducer,
});

export default rootReducer;
