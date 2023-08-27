import skin from "/assets/card/orange-card.png"

export default function CardInPlay({ handleClick, card, index, shown, flip }) {
	if (shown) {
		return (
			<div
				onClick={handleClick}
				className="w-[5.675rem] h-32 bg-transparent"
				value={card}
				index={index}
				style={{ perspective: "1000px" }}
			>
				<div
					className="flip-card-inner relative w-full h-full duration-[1234ms]"
					style={
						flip
							? { transformStyle: "preserve-3d", transform: "rotateY(180deg)" }
							: { transformStyle: "preserve-3d" }
					}
				>
					<div
						className="flip-card-front bg-[#bbb] text-black absolute w-full h-full flex flex-col justify-center items-center"
						style={{
							backfaceVisibility: "hidden",
							WebkitBackfaceVisibility: "hidden",
							MozBackfaceVisibility: "hidden",
						}}
					>
						{card}

						<h1>belakang</h1>
					</div>
					<div
						className="flip-card-back bg-[dodgerblue] text-white absolute w-full h-full flex justify-center items-center"
						style={{
							transform: "rotateY(180deg)",
							backfaceVisibility: "hidden",
							WebkitBackfaceVisibility: "hidden",
							MozBackfaceVisibility: "hidden",
						}}
					>
						{card}
					</div>
				</div>
			</div>
		);
	}

	return <div className="w-20 h-32"></div>;
}
