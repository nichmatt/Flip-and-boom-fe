import { TES_TES } from "../actionType";

const initialState = {
	user: {},
	loading: false,
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case TES_TES:
			// console.log(action.payload);
			return {
				...state,
				loading: action.payload,
			};
		default:
			return state;
	}
}

export default userReducer;
