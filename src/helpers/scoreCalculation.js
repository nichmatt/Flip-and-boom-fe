export const scoreCalculation = (hp, totalTurn) => {
	let score = 0;

	for (let i = 1; i <= +hp; i++) {
		score += 100 + Math.round(100 * (i * 0.75));
	}

  score += Math.round(500000 / totalTurn)

	return score;
};
