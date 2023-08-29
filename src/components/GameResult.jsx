import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { pause } from "../helpers";

import NumberTween from "./NumberTween";
import NumberTween2 from "./NumberTween2";

export default function GameResult({ hp, totalTurn }) {
	const { gameMode } = useSelector((state) => state.gameModeReducer);

	const [score, setScore] = useState(0);
	const [exp, setExp] = useState(0);

	useEffect(() => {
		(async () => {
			await pause(2500);

			let tempScore = 0;

			for (let i = 1; i <= hp; i++) {
				tempScore += 2 + 2 * (i / 1000);
			}

			tempScore = Math.floor(tempScore);

			setScore(tempScore);

			await pause(3000);

			tempScore += 100000 / totalTurn;

			setScore(tempScore);

			await pause(2000);

			switch (gameMode) {
				case "EAZY":
					setExp(tempScore * 0.25);
					break;

				case "MEDIUM":
					setExp(tempScore);
					break;
          
				case "HARD":
					setExp(tempScore * 2);
					break;

				default:
					setExp(tempScore * 5);
					break;
			}
		})();
	}, []);

	return (
		<>
			<div className="fixed h-screen w-screen z-20 bg-transparent top-0 left-0 flex justify-center items-center animate__animated animate__fadeIn">
				<div
					className="w-9/12 h-4/5 backdrop-blur-[2px] bg-[rgba(8,8,8,0.97)] rounded-[20px] flex flex-col items-center justify-center text-3xl font-bold text-white"
					style={{
						boxShadow:
							"35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -3px -3px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
					}}
				>
					<div className="grid grid-cols-3 w-full h-full">
						<div
							name="grid kiri"
							className="flex flex-col h-1/3 my-auto justify-between pl-10 italic tracking-tighter"
						>
							<div className="flex">
								<h1>HP REMAINING :&nbsp;</h1>
								<h2 className="animate__animated animate__fadeInRight animate__delay-1s">
									{hp}
								</h2>
							</div>
							<div className="flex">
								<h1>TOTAL TURN :&nbsp;</h1>
								<h2 className="animate__animated animate__fadeInRight animate__delay-4s">
									{totalTurn}
								</h2>
							</div>
							<h1>
								SCORE : <NumberTween number={score} />
							</h1>
							<h1>
								EXPERIENCE : <NumberTween2 number={exp} />
							</h1>
						</div>

						<div name="grid tengah"></div>

						<div name="grid kanan"></div>
					</div>
				</div>
			</div>
		</>
	);
}
