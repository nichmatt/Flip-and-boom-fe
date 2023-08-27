import { SELECTED_CHAR_SET, SELECTED_SKIN_SET } from "../actionType";

export function setSelectedChar(payload) {
	return {
		type: SELECTED_CHAR_SET,
		payload,
	};
}

export function setSelectedSkin(payload) {
	return {
		type: SELECTED_SKIN_SET,
		payload,
	};
}
