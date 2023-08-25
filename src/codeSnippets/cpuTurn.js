import { randomNumber, pause } from "../helpers";

export const cpuTurn = async (
	board,
	setEnemyHp,
	enemyHp,
	setTurn,
	setHp,
	hp,
	setBoard
) => {
	try {
		const enemyCards = [];

		const boardCopy = structuredClone(board);

		boardCopy.forEach((el, index) => {
			el.index = index;
		});

		const boardShownTrueOnly = boardCopy.filter((el) => el.shown);

		const firstRandomNum = randomNumber(boardShownTrueOnly);

		await pause(1500);

		const firstRandomCard = boardShownTrueOnly?.splice(firstRandomNum, 1);

		console.log(firstRandomCard[0].value);

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
			setHp(hp - +enemyCards[0][0]);

			const clonedBoard = structuredClone(board);

			enemyCards.forEach((el) => {
				clonedBoard[+el[1]].shown = false;
			});

			setBoard(clonedBoard);
		}

		await new Promise((res) => setTimeout(res, 2000));

		setTurn("user");
	} catch (err) {
		throw err;
	}
};
