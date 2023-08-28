import { flipClose, flipOpen, pause } from "../helpers";

export const handleUserCardClick = async (
	e,
	turn,
	setHp,
	setTurn,
	chosenCard,
	setChosenCard,
	resetChosenCard,
	hp,
	board,
	setBoard,
	aiMemory,
	setAiMemory
) => {
	e.stopPropagation();

	if (turn != "user") return;

	const value = e.currentTarget.attributes.value.value;

	const index = +e.currentTarget.attributes.index.value;

	if (chosenCard.length && chosenCard[0][1] == index) return;

	flipOpen(board, setBoard, index);

	// console.log(`FLIP KE-${chosenCard.length + 1} : ${value}`);

	const clonedAiMemory = structuredClone(aiMemory);

	let pushChecker = true;

	for (let el of clonedAiMemory[value]) {
		if (el == index) {
			pushChecker = false;
			break;
		}
	}

	if (pushChecker) {
		clonedAiMemory[value]?.push(index);

		setAiMemory(clonedAiMemory);
	}

	if (value == "bomb") {
		resetChosenCard();

		setHp(hp - 75);

		setTurn("wait");

		await pause();

		flipClose(board, setBoard);

		setTurn("cpu");

		return;
	}

	const newArr = structuredClone(chosenCard);

	newArr.push([value, index]);

	setChosenCard(newArr);
};
