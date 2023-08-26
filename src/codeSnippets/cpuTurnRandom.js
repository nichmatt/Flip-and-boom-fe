import { randomNumber, pause, removeCardFromBoard } from "../helpers";

export const cpuTurnRandom = async ({
	board,
	setEnemyHp,
	enemyHp,
	setTurn,
	setHp,
	hp,
	setBoard,
	boardShownTrueOnly,
}) => {
	try {
		const enemyCards = [];

		const firstRandomNum = randomNumber(boardShownTrueOnly);

		await pause(1500);

		const firstRandomCard = boardShownTrueOnly?.splice(firstRandomNum, 1);

		if (firstRandomCard[0].value == "bomb") {
			setEnemyHp(enemyHp - 2);

			setTurn("user");

			return;
		}

		enemyCards.push([firstRandomCard[0].value, firstRandomCard[0].index]);

		await pause(1500);

		const secondRandomNum = randomNumber(boardShownTrueOnly);

		const secondRandomCard = boardShownTrueOnly?.splice(secondRandomNum, 1);

		if (secondRandomCard[0].value == "bomb") {
			setEnemyHp(enemyHp - 2);

			setTurn("user");

			return;
		}

		enemyCards.push([secondRandomCard[0].value, secondRandomCard[0].index]);

		console.log(enemyCards);

		if (enemyCards[0][0] == enemyCards[1][0]) {
			const damageDealtToUser = +enemyCards[0][0];

			hp - damageDealtToUser < 0 ? setHp(0) : setHp(hp - damageDealtToUser);

			removeCardFromBoard(board, setBoard, enemyCards);
		} else {
			await pause(2000);

			setTurn("user");
		}
	} catch (err) {
		throw err;
	}
};
