import { randomNumber, pause, removeCardFromBoard } from "../helpers";

export const cpuTurnAccurate = async ({
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
	console.log(aiMemory);

  

	setTurn("wait");

	await pause(2000);

	setTurn("user");
};
