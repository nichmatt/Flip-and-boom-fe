import { removeCardFromBoard, pause, flipClose } from "../helpers";

export const afterFlip2Card = async (
	chosenCard,
	enemyHp,
	setEnemyHp,
	board,
	setBoard,
	resetChosenCard,
	setTurn,
	aiMemory,
	setAiMemory
) => {
	setTurn("wait");

	if (chosenCard[0][0] == chosenCard[1][0]) {
		const damageDealtToEnemy = +chosenCard[0][0];

		const clonedAiMemory = structuredClone(aiMemory);

		for (let i = 0; i < clonedAiMemory[damageDealtToEnemy]?.length; i++) {
			if (
				clonedAiMemory[damageDealtToEnemy][i] == chosenCard[0][1] ||
				clonedAiMemory[damageDealtToEnemy][i] == chosenCard[1][1]
			) {
				clonedAiMemory[damageDealtToEnemy].splice(i, 1);
				i--;
			}
		}

		setAiMemory(clonedAiMemory);

		enemyHp - damageDealtToEnemy < 0
			? setEnemyHp(0)
			: setEnemyHp(enemyHp - damageDealtToEnemy);

		if (enemyHp - damageDealtToEnemy <= 0) {
			return;
		}

		await pause(2000);

		removeCardFromBoard(board, setBoard, chosenCard);
	} else {
		await pause(2000);

		flipClose(board, setBoard);
	}

	await pause(2000);

	setTurn("cpu");

	resetChosenCard();
};
