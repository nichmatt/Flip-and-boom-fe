export const handleUserCardClick = (
	e,
	turn,
	setHp,
	setTurn,
	chosenCard,
	setChosenCard
) => {
	e.stopPropagation();

	if (turn == "cpu") return;

	const value = e.currentTarget.attributes.value.value;

	const index = e.currentTarget.attributes.index.value;

	if (value == "bomb") {
		setHp(hp - 2);

		setTurn("cpu");

		return;
	}

	if (chosenCard.length && chosenCard[0][1] == index) return;

	const newArr = structuredClone(chosenCard);

	newArr.push([value, index]);

  setChosenCard(newArr);
};
