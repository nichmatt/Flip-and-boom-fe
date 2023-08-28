import { GAME_MODE_SET } from "../actionType";

const initialState = {
	gameMode: "impossible",
	// gameMode: "easy",
};

function gameModeReducer(state = initialState, action) {
	switch (action.type) {
		case GAME_MODE_SET:
			return {
				...state,
				gameMode: action.payload,
			};
		default:
			return state;
	}
}

export default gameModeReducer;
