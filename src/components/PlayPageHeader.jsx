import { useSelector } from "react-redux";
import { useEffect } from "react";

import defaultChar from "/assets/character/default.png";
import smolderingDetonation from "/assets/character/smoldering-detonation.png";
import mrsParty from "/assets/character/mrs-party.png";
import mrKing from "/assets/character/mr-king.png";
import azureExplosiomancer from "/assets/character/azure-explosiomancer.png";
import crimsonSpecter from "/assets/character/crimson-specter.png";
import normalGuy from "/assets/character/normal-guy.png";
import owen from "/assets/character/owen.png";
import vampiricBlaster from "/assets/character/vampiric-blaster.png";

import NumberTween from "./NumberTween";

export default function PlayPageHeader({
	hp,
	enemyHp,
	setHp,
	setEnemyHp,
	turn,
}) {
	const { profile } = useSelector((state) => state.userReducer);
	const { gameMode } = useSelector((state) => state.gameModeReducer);

	// this const to rerender
	const abc = hp + 100;

	useEffect(() => {
		setHp(1000), setEnemyHp(1000);
	}, []);

	return (
		<div className="flex h-32 mx-44 justify-between text-white italic font-bold relative">
			{turn == "user" ? (
				<div className="absolute -left-28 top-[25%] flex flex-col items-center text-xl animate__animated animate__bounceIn gap-y-[0.35rem]">
					<div>
						<i
							className="fa-solid fa-circle-right text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>Your Turn</div>
				</div>
			) : (
				<div className="absolute -left-28 top-[25%] flex flex-col items-center text-xl animate__animated animate__bounceOut gap-y-[0.35rem]">
					<div>
						<i
							className="fa-solid fa-circle-right text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>Your Turn</div>
				</div>
			)}

			{turn == "cpu" ? (
				<div className="absolute -right-28 top-[25%] flex flex-col items-center text-xl animate__animated animate__bounceIn gap-y-[0.35rem]">
					<div>
						<i
							className="fa-solid fa-circle-left text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>CPU Turn</div>
				</div>
			) : (
				<div className="absolute -right-28 top-[25%] flex flex-col items-center text-xl animate__animated animate__bounceOut gap-y-[0.35rem]">
					<div>
						<i
							className="fa-solid fa-circle-left text-2xl animate-spinX"
							style={{ color: "#D98F00" }}
						></i>
					</div>
					<div>CPU Turn</div>
				</div>
			)}
			<div className="w-32 h-32 rotate-[10deg]">
				<img
					src={
						profile?.selectedChar == "mr-king"
							? mrKing
							: profile?.selectedChar == "mrs-party"
							? mrsParty
							: profile?.selectedChar == "azure-explosiomancer"
							? azureExplosiomancer
							: profile?.selectedChar == "crimson-specter"
							? crimsonSpecter
							: profile?.selectedChar == "normal-guy"
							? normalGuy
							: profile?.selectedChar == "owen"
							? owen
							: profile?.selectedChar == "smoldering-detonation"
							? smolderingDetonation
							: profile?.selectedChar == "vampiric-blaster"
							? vampiricBlaster
							: defaultChar
					}
				/>
			</div>
			<div className="flex flex-col justify-end pb-7">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div>
						HP : <NumberTween number={hp} />
					</div>
					<div>{profile?.username?.toUpperCase()}</div>
				</div>
				<div className="h-6 w-[25rem] bg-black rounded-2xl border">
					<div
						className="h-full rounded-2xl duration-1000"
						style={{
							width: `${hp / 10}%`,
							backgroundColor: `${
								hp > 500 ? "#2EFF0C" : hp > 250 ? "#FFAC0C" : "#ff0c0c"
							}`,
						}}
					></div>
				</div>
			</div>
			<div className="flex items-end pb-[1.375rem] text-7xl">VS</div>
			<div className="flex flex-col justify-end pb-7">
				<div className="text-2xl flex justify-between px-4 mb-1">
					<div>{gameMode}</div>
					<div>
						HP : <NumberTween number={enemyHp} />
					</div>
				</div>
				<div className="h-6 w-[25rem] bg-black rounded-2xl border">
					<div
						className="h-full rounded-2xl duration-1000"
						style={{
							width: `${enemyHp / 10}%`,
							backgroundColor: `${
								enemyHp > 500
									? "#2EFF0C"
									: enemyHp > 250
									? "#FFAC0C"
									: "#ff0c0c"
							}`,
						}}
					></div>
				</div>
			</div>
			<div
				className="w-32 h-32"
				style={{ transform: "scaleX(-1) rotate(10deg)" }}
			>
				<img
					src={
						gameMode == "IMPOSSIBLE"
							? mrKing
							: gameMode == "HARD"
							? mrsParty
							: gameMode == "MEDIUM"
							? smolderingDetonation
							: defaultChar
					}
				/>
			</div>
		</div>
	);
}
