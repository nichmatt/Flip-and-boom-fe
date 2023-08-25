export default function CardInPlay({ handleClick, card, index, shown }) {
	if (shown) {
		return (
			<div
				onClick={handleClick}
				className="w-20 h-32 bg-green-100 flex justify-center items-center"
				value={card}
				index={index}
			>
				{card}
			</div>
		);
	}

	return (
		<div className="w-20 h-32"></div>
	);
}
