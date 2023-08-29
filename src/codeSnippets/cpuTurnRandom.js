import {
	randomNumber,
	pause,
	removeCardFromBoard,
	flipOpen,
	flipClose,
} from "../helpers";

export const cpuTurnRandom = async ({
	board,
	setEnemyHp,
	enemyHp,
	setTurn,
	setHp,
	hp,
	setBoard,
	aiMemory,
	setAiMemory,
}) => {
  console.log('aibodoh');

	console.log(board);

	const enemyCards = [];

	const boardShownTrueOnly = structuredClone(board).filter((el) => el.shown);

	await pause();

	const firstRandomCard = boardShownTrueOnly?.splice(
		randomNumber(boardShownTrueOnly),
		1
	);

	// console.log("KARTU PERTAMA CPU");

	const newBoard = flipOpen(board, setBoard, firstRandomCard[0].index);

	const clonedAiMemory = structuredClone(aiMemory);

	let pushChecker = true;

	for (let el of clonedAiMemory[firstRandomCard[0]?.value]) {
		if (el == firstRandomCard[0]?.index) {
			pushChecker = false;
			break;
		}
	}

	if (pushChecker) {
		clonedAiMemory[firstRandomCard[0]?.value]?.push(firstRandomCard[0]?.index);

		setAiMemory(clonedAiMemory);
	}

	if (firstRandomCard[0].value == "bomb") {
		enemyHp - 75 <= 0 ? setEnemyHp(0) : setEnemyHp(enemyHp - 75);

		if (enemyHp - 75 <= 0) return;

		await pause();

		flipClose(board, setBoard);

		setTurn("user");

		return;
	}

	enemyCards.push([firstRandomCard[0].value, firstRandomCard[0].index]);

	await pause();

	const secondRandomCard = boardShownTrueOnly?.splice(
		randomNumber(boardShownTrueOnly),
		1
	);

	// console.log("KARTU KEDUA CPU");

	flipOpen(newBoard, setBoard, secondRandomCard[0].index);

	let pushChecker2 = true;

	for (let el of clonedAiMemory[secondRandomCard[0]?.value]) {
		if (el == secondRandomCard[0]?.index) {
			pushChecker2 = false;
			break;
		}
	}

	if (pushChecker2) {
		clonedAiMemory[secondRandomCard[0]?.value]?.push(
			secondRandomCard[0]?.index
		);

		setAiMemory(clonedAiMemory);
	}

	if (secondRandomCard[0].value == "bomb") {
		enemyHp - 75 <= 0 ? setEnemyHp(0) : setEnemyHp(enemyHp - 75);

		if (enemyHp - 75 <= 0) return;

		await pause();

		flipClose(board, setBoard);

		setTurn("user");

		return;
	}

	enemyCards.push([secondRandomCard[0].value, secondRandomCard[0].index]);

	if (enemyCards[0][0] == enemyCards[1][0]) {
		const damageDealtToUser = +enemyCards[0][0];

		for (let i = 0; i < clonedAiMemory[damageDealtToUser]?.length; i++) {
			if (
				clonedAiMemory[damageDealtToUser][i] == enemyCards[0][1] ||
				clonedAiMemory[damageDealtToUser][i] == enemyCards[1][1]
			) {
				clonedAiMemory[damageDealtToUser].splice(i, 1);
				i--;
			}
		}

		setAiMemory(clonedAiMemory);

		hp - damageDealtToUser <= 0 ? setHp(0) : setHp(hp - damageDealtToUser);

		if (hp - damageDealtToUser <= 0) return;

		await pause();

		removeCardFromBoard(board, setBoard, enemyCards);
	} else {
		await pause();

		flipClose(board, setBoard);

		await pause();
	}

	setTurn("user");
};
