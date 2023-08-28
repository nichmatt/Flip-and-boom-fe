import { useSelector } from "react-redux";

import defaultSkin from "/assets/card/black-card/back-card.png";
import blueSkin from "/assets/card/blue-card/back-card.png";

import default100 from "/assets/card/black-card/100.png";
import default125 from "/assets/card/black-card/125.png";
import default150 from "/assets/card/black-card/150.png";
import default175 from "/assets/card/black-card/175.png";
import default200 from "/assets/card/black-card/200.png";
import default210 from "/assets/card/black-card/210.png";
import default220 from "/assets/card/black-card/220.png";
import default250 from "/assets/card/black-card/250.png";
import defaultBomb from "/assets/card/black-card/-75.png";

export default function CardInPlay({ handleClick, card, index, shown, flip }) {
	const { selectedSkin } = useSelector((state) => state.selectedReducer);

	if (shown) {
		return (
			<div
				onClick={handleClick}
				className="w-[6.35rem] h-36 bg-transparent"
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
						className="flip-card-front text-black absolute w-full h-full flex flex-col justify-center items-center"
						style={{
							backfaceVisibility: "hidden",
							WebkitBackfaceVisibility: "hidden",
							MozBackfaceVisibility: "hidden",
						}}
					>
						<img src={selectedSkin == "cerulean" ? blueSkin : defaultSkin} />
					</div>
					<div
						className="flip-card-back text-white absolute w-full h-full flex justify-center items-center"
						style={{
							transform: "rotateY(180deg)",
							backfaceVisibility: "hidden",
							WebkitBackfaceVisibility: "hidden",
							MozBackfaceVisibility: "hidden",
						}}
					>
						{selectedSkin == "cerulean" ? (
							<img src={``} />
						) : (
							<img
								src={
									card == 100
										? default100
										: card == 125
										? default125
										: card == 150
										? default150
										: card == 175
										? default175
										: card == 200
										? default200
										: card == 210
										? default210
										: card == 220
										? default220
										: card == 250
										? default250
										: defaultBomb
								}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}

	return <div className="w-20 h-32"></div>;
}
