// npm packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// components
import CardInPlay from "../components/CardInPlay";
import GameResult from "../components/GameResult";

// code snippets to shorten the code in PlayPage
import {
	handleUserCardClick,
	cpuTurnRandom,
	cpuTurnAccurate,
	afterFlip2Card,
	createdLifecycle,
} from "../codeSnippets";

// export default jsx
export default function PlayPage() {
	// redux
	const { gameMode } = useSelector((state) => state.gameModeReducer);

	// collection of useState
	const [board, setBoard] = useState([]);
	const [hp, setHp] = useState(25);
	const [enemyHp, setEnemyHp] = useState(25);
	const [chosenCard, setChosenCard] = useState([]);
	const [turn, setTurn] = useState("user");
	const [totalTurn, setTotalTurn] = useState(0);
	const [showGameResult, setShowGameResult] = useState(false);

	// collection of functions
	const resetChosenCard = () => setChosenCard([]);

	const handleClick = (e) => {
		handleUserCardClick(e, turn, setHp, setTurn, chosenCard, setChosenCard, hp, board, setBoard);
	};

	// collection of function parameters
	const cpuTurnRandomParameters = {
		board,
		setEnemyHp,
		enemyHp,
		setTurn,
		setHp,
		hp,
		setBoard,
	};

	const cpuTurnAccurateParameters = { ...cpuTurnRandomParameters };

	// created lifecycle
	useEffect(() => {
		createdLifecycle(setBoard);
	}, []);

	// watcher for chosenCard useState
	useEffect(() => {
		chosenCard.length == 2 &&
			afterFlip2Card(
				chosenCard,
				enemyHp,
				setEnemyHp,
				board,
				setBoard,
				resetChosenCard,
				setTurn,
				setShowGameResult,
			);
	}, [chosenCard]);

	// watcher for turn useState
	useEffect(() => {
		console.log(turn);
		setTotalTurn(totalTurn + 1);
		if (turn == "cpu") {
			switch (gameMode) {
				case "easy":
					cpuTurnRandom(cpuTurnRandomParameters);
					break;

				default:
					cpuTurnAccurate(cpuTurnAccurateParameters);
					break;
			}
		}
	}, [turn]);

	// watcher for enemyHp useState
	useEffect(() => {
		if (enemyHp <= 0 || hp <= 0) {
			setShowGameResult(true);
		}
	}, [enemyHp, hp]);

	// component that is being returned
	return (
		<>
			<div
				className="min-h-screen h-full w-full flex flex-col"
				style={{
					background:
						"linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
				}}
			>
				{/* show game result after one of the hp reach 0 */}
				{showGameResult && <GameResult hp={hp} totalTurn={totalTurn} />}

				{/* health bar for player and enemy */}
				<div className="flex justify-between bg-white text-3xl h-28">
					<div>HP: {hp}</div>
					<div>Enemy HP: {enemyHp}</div>
				</div>

				{/* card playing arena */}
				<div className="grid grid-cols-10 gap-y-5 bg-red-100">
					{board.map((card, index) => {
						return (
							<CardInPlay
								key={index}
								card={card.value}
								shown={card.shown}
								flip={card.flip}
								index={index}
								handleClick={handleClick}
							/>
						);
					})}
				</div>

        <div className="flex flex-col"></div>
			</div>
		</>
	);
}
