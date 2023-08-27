import { SELECTED_CHAR_SET, SELECTED_SKIN_SET } from "../actionType";

const initialState = {
	selectedSkin: "default",
	selectedChar: "default",
};

function selectedReducer(state = initialState, action) {
	switch (action.type) {
		case SELECTED_CHAR_SET:
			return {
				...state,
				selectedChar: action.payload,
			};

		case SELECTED_SKIN_SET:
			return {
				...state,
				selectedSkin: action.payload,
			};

		default:
			return state;
	}
}

export default selectedReducer;
