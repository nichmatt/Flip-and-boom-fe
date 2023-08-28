export const pause = (duration = 1000) =>
	new Promise((res) => setTimeout(res, duration));
