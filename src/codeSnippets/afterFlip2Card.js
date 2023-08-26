import { removeCardFromBoard } from "../helpers";

export const afterFlip2Card = (
	chosenCard,
	enemyHp,
	setEnemyHp,
	board,
	setBoard,
	resetChosenCard,
	setTurn
) => {
	if (chosenCard[0][0] == chosenCard[1][0]) {
		const damageDealtToEnemy = +chosenCard[0][0];

		enemyHp - damageDealtToEnemy < 0
			? setEnemyHp(0)
			: setEnemyHp(enemyHp - damageDealtToEnemy);

		if (enemyHp - damageDealtToEnemy <= 0) {
			return;
		}

		removeCardFromBoard(board, setBoard, chosenCard);
	} else {
		setTurn("cpu");
	}

	resetChosenCard();
};
