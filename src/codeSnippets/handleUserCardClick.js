import { flipClose, flipOpen, pause } from "../helpers";

export const handleUserCardClick = async (
	e,
	turn,
	setHp,
	setTurn,
	chosenCard,
	setChosenCard,
	hp,
	board,
	setBoard
) => {
	e.stopPropagation();

	if (turn != "user") return;

	const value = e.currentTarget.attributes.value.value;

	const index = e.currentTarget.attributes.index.value;

	flipOpen(board, setBoard, index);

	if (value == "bomb") {
		setHp(hp - 2);

    setTurn("wait")

		await pause(2000);

		flipClose(board, setBoard);

		setTurn("cpu");

		return;
	}

	if (chosenCard.length && chosenCard[0][1] == index) return;

	const newArr = structuredClone(chosenCard);

	newArr.push([value, index]);

	setChosenCard(newArr);
};
