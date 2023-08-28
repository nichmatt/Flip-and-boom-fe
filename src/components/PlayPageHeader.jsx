import { useSelector } from "react-redux";

import defaultChar from "/assets/character/default.png";
import mrKing from "/assets/character/mr-king.png";

import NumberTween from "./NumberTween";

export default function PlayPageHeader({ hp, enemyHp }) {
	const { selectedChar } = useSelector((state) => state.selectedReducer);

	return (
		<div className="flex h-32 mx-44 justify-between text-white italic font-bold">
			<div className="w-32 h-32 rotate-[10deg]">
				<img src={selectedChar == "mrKing" ? mrKing : defaultChar} />
			</div>
			<div className="flex flex-col justify-end pb-7">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div>
						HP : <NumberTween number={hp} />
					</div>
					<div>Lumayan</div>
				</div>
				<div className="h-6 w-[25rem] bg-black rounded-2xl border">
					<div
						className={`h-full bg-[${
							hp > 500 ? "#2EFF0C" : hp > 250 ? "#FFAC0C" : "#ff0c0c"
						}] rounded-2xl duration-1000`}
						style={{ width: `${hp / 10}%` }}
					></div>
				</div>
			</div>
			<div className="flex items-end pb-[1.375rem] text-7xl">VS</div>
			<div className="flex flex-col justify-end pb-7">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div>Computer</div>
					<div>
						HP : <NumberTween number={enemyHp} />
					</div>
				</div>
				<div className="h-6 w-[25rem] bg-black rounded-2xl border">
					<div
						className={`h-full bg-[${
							enemyHp > 500 ? "#2EFF0C" : enemyHp > 250 ? "#FFAC0C" : "#ff0c0c"
						}] rounded-2xl duration-1000`}
						style={{ width: `${enemyHp / 10}%` }}
					></div>
				</div>
			</div>
			<div
				className="w-32 h-32"
				style={{ transform: "scaleX(-1) rotate(10deg)" }}
			>
				<img src={selectedChar == "mrKing" ? mrKing : mrKing} />
			</div>
		</div>
	);
}
