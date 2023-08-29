export const pause = (duration = 2000) =>
	new Promise((res) => setTimeout(res, duration));
