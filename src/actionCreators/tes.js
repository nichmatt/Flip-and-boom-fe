import { TES_TES } from "../actionType";

export function tes(payload) {
	return {
		type: TES_TES,
		payload,
	};
}
