import {
	randomNumber,
	pause,
	removeCardFromBoard,
	flipOpen,
	flipClose,
} from "../helpers";

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
	skipTurn,
	setSkipTurn,
	setWobbleSelf,
	setshakeCpu,
	setBoomSelf,
	setBoom,
	setThrowBombSelf100,
	setThrowBombSelf125,
	setThrowBombSelf150,
	setThrowBombSelf175,
	setThrowBombSelf200,
	setThrowBombSelf210,
	setThrowBombSelf220,
	setThrowBombSelf250,
}) => {
	if (skipTurn) {
		setTurn("user");

		setSkipTurn(false);

		return;
	}

	console.log("aipintar");

	console.log(board);

	const enemyCards = [];

	const clonedAiMemory = structuredClone(aiMemory);

	const bombSet = new Set(clonedAiMemory?.bomb);

	const boardShownTrueOnlyWithoutBomb = structuredClone(board).filter(
		(el) => el.shown && !bombSet.has(el.index)
	);

	const loopSequence = [250, 220, 210, 200, 175, 150, 125, 100];

	await pause();

	for (let score of loopSequence) {
		if (clonedAiMemory[score].length >= 2) {
			const firstCard = boardShownTrueOnlyWithoutBomb.find(
				(el) => el.index == clonedAiMemory[score][0]
			);

			const newBoard = flipOpen(board, setBoard, clonedAiMemory[score][0]);

			await pause();

			const secondCard = boardShownTrueOnlyWithoutBomb.find(
				(el) => el.index == clonedAiMemory[score][1]
			);

			flipOpen(newBoard, setBoard, clonedAiMemory[score][1]);

			clonedAiMemory[score].splice(0, 2);

			setAiMemory(clonedAiMemory);

			switch (score) {
				case 100:
					setThrowBombSelf100(true);
					break;
				case 125:
					setThrowBombSelf125(true);
					break;
				case 150:
					setThrowBombSelf150(true);
					break;
				case 175:
					setThrowBombSelf175(true);
					break;
				case 200:
					setThrowBombSelf200(true);
					break;
				case 210:
					setThrowBombSelf210(true);
					break;
				case 220:
					setThrowBombSelf220(true);
					break;
				default:
					setThrowBombSelf250(true);
					break;
			}

			await pause(2789);

			switch (score) {
				case 100:
					setThrowBombSelf100(false);
					break;
				case 125:
					setThrowBombSelf125(false);
					break;
				case 150:
					setThrowBombSelf150(false);
					break;
				case 175:
					setThrowBombSelf175(false);
					break;
				case 200:
					setThrowBombSelf200(false);
					break;
				case 210:
					setThrowBombSelf210(false);
					break;
				case 220:
					setThrowBombSelf220(false);
					break;
				default:
					setThrowBombSelf250(false);
					break;
			}

			setBoomSelf(true);

			await pause(900);

			setWobbleSelf(true);

			await pause(100);

			setBoomSelf(false);

			hp - score <= 0 ? setHp(0) : setHp(hp - score);

			setTurn("cpuwait");

			await pause();

			removeCardFromBoard(board, setBoard, [
				[firstCard?.value, firstCard?.index],
				[secondCard?.value, secondCard?.index],
			]);

			await pause();

			setTurn("user");

      setWobbleSelf(false);

			return;
		}
	}

	const singleIndex = new Set();

	loopSequence.forEach((num) => {
		clonedAiMemory[num].length && singleIndex.add(clonedAiMemory[num][0]);
	});

	const boardToRandomized = boardShownTrueOnlyWithoutBomb.filter(
		(el) => !singleIndex.has(el.index)
	);

	const firstRandomCard = boardToRandomized?.splice(
		randomNumber(boardToRandomized),
		1
	);

	console.log("KARTU PERTAMA CPU");

	const newBoard = flipOpen(board, setBoard, firstRandomCard[0].index);

	clonedAiMemory[firstRandomCard[0]?.value]?.push(firstRandomCard[0]?.index);

	setAiMemory(clonedAiMemory);

	if (firstRandomCard[0].value == "bomb") {
		setBoom(true);

		await pause(900);

		setshakeCpu(true);

		await pause(100);

		setBoom(false);

		enemyHp - 75 <= 0 ? setEnemyHp(0) : setEnemyHp(enemyHp - 75);

		if (enemyHp - 75 <= 0) return;

		await pause();

		flipClose(board, setBoard);

		await pause();

		setTurn("user");

		setshakeCpu(false);

		return;
	}

	enemyCards.push([firstRandomCard[0].value, firstRandomCard[0].index]);

	await pause();

	console.log("KARTU KEDUA CPU");

	if (clonedAiMemory[firstRandomCard[0].value].length >= 2) {
		const secondCard = board?.find(
			(el) => el.index == clonedAiMemory[firstRandomCard[0].value][0]
		);

		enemyCards.push([secondCard.value, secondCard.index]);

		flipOpen(newBoard, setBoard, secondCard.index);

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

    switch (damageDealtToUser) {
      case 100:
        setThrowBombSelf100(true);
        break;
      case 125:
        setThrowBombSelf125(true);
        break;
      case 150:
        setThrowBombSelf150(true);
        break;
      case 175:
        setThrowBombSelf175(true);
        break;
      case 200:
        setThrowBombSelf200(true);
        break;
      case 210:
        setThrowBombSelf210(true);
        break;
      case 220:
        setThrowBombSelf220(true);
        break;
      default:
        setThrowBombSelf250(true);
        break;
    }

    await pause(2789);

    switch (damageDealtToUser) {
      case 100:
        setThrowBombSelf100(false);
        break;
      case 125:
        setThrowBombSelf125(false);
        break;
      case 150:
        setThrowBombSelf150(false);
        break;
      case 175:
        setThrowBombSelf175(false);
        break;
      case 200:
        setThrowBombSelf200(false);
        break;
      case 210:
        setThrowBombSelf210(false);
        break;
      case 220:
        setThrowBombSelf220(false);
        break;
      default:
        setThrowBombSelf250(false);
        break;
    }

    setBoomSelf(true);

    await pause(900);

    setWobbleSelf(true);

    await pause(100);

    setBoomSelf(false);

		hp - damageDealtToUser <= 0 ? setHp(0) : setHp(hp - damageDealtToUser);

		setTurn("cpuwait");

		await pause();

		removeCardFromBoard(board, setBoard, enemyCards);

		await pause();

		setTurn("user");

    setWobbleSelf(false);

		return;
	} else {
		const secondRandomCard = boardToRandomized?.splice(
			randomNumber(boardToRandomized),
			1
		);

		flipOpen(newBoard, setBoard, secondRandomCard[0].index);

		clonedAiMemory[secondRandomCard[0]?.value]?.push(
			secondRandomCard[0]?.index
		);

		setAiMemory(clonedAiMemory);

		if (secondRandomCard[0].value == "bomb") {
			setBoom(true);

			await pause(900);

			setshakeCpu(true);

			await pause(100);

			setBoom(false);

			enemyHp - 75 <= 0 ? setEnemyHp(0) : setEnemyHp(enemyHp - 75);

			setTurn("cpuwait");

			await pause();

			flipClose(board, setBoard);

			await pause();

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

      switch (damageDealtToUser) {
        case 100:
          setThrowBombSelf100(true);
          break;
        case 125:
          setThrowBombSelf125(true);
          break;
        case 150:
          setThrowBombSelf150(true);
          break;
        case 175:
          setThrowBombSelf175(true);
          break;
        case 200:
          setThrowBombSelf200(true);
          break;
        case 210:
          setThrowBombSelf210(true);
          break;
        case 220:
          setThrowBombSelf220(true);
          break;
        default:
          setThrowBombSelf250(true);
          break;
      }
  
      await pause(2789);
  
      switch (damageDealtToUser) {
        case 100:
          setThrowBombSelf100(false);
          break;
        case 125:
          setThrowBombSelf125(false);
          break;
        case 150:
          setThrowBombSelf150(false);
          break;
        case 175:
          setThrowBombSelf175(false);
          break;
        case 200:
          setThrowBombSelf200(false);
          break;
        case 210:
          setThrowBombSelf210(false);
          break;
        case 220:
          setThrowBombSelf220(false);
          break;
        default:
          setThrowBombSelf250(false);
          break;
      }
  
      setBoomSelf(true);
  
      await pause(900);
  
      setWobbleSelf(true);
  
      await pause(100);
  
      setBoomSelf(false);

			hp - damageDealtToUser <= 0 ? setHp(0) : setHp(hp - damageDealtToUser);

			setTurn("cpuwait");

			await pause();

			removeCardFromBoard(board, setBoard, enemyCards);

			await pause();

			setTurn("user");

      setWobbleSelf(false);

      return;
		}

		setTurn("cpuwait");

		await pause();

		flipClose(board, setBoard);

		await pause();

		setTurn("user");

		setshakeCpu(false);
	}
};
