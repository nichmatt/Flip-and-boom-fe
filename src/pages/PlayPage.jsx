// npm packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// components
import GameResult from "../components/GameResult";
import PlayPageHeader from "../components/PlayPageHeader";
import PlayPageArena from "../components/PlayPageArena";

// code snippets to shorten the code in PlayPage
import {
	handleUserCardClick,
	cpuTurnRandom,
	cpuTurnAccurate,
	afterFlip2Card,
	createdLifecycle,
} from "../codeSnippets";

// helpers
import { pause } from "../helpers";

// export default jsx
export default function PlayPage() {
	// state from redux
	const { gameMode } = useSelector((state) => state.gameModeReducer);

	// collection of useState
	const [board, setBoard] = useState([]);
	const [hp, setHp] = useState(1000);
	const [enemyHp, setEnemyHp] = useState(1000);
	const [chosenCard, setChosenCard] = useState([]);
	const [turn, setTurn] = useState("user");
	const [totalTurn, setTotalTurn] = useState(0);
	const [showGameResult, setShowGameResult] = useState(false);
	const [aiMemory, setAiMemory] = useState({
		250: [],
		220: [],
		210: [],
		200: [],
		175: [],
		150: [],
		125: [],
		100: [],
		bomb: [],
	});

	// collection of functions
	const resetChosenCard = () => setChosenCard([]);

	const handleClick = (e) => {
		handleUserCardClick(
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
		);
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

	const cpuTurnAccurateParameters = {
		...cpuTurnRandomParameters,
		aiMemory,
		setAiMemory,
	};

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
				aiMemory,
				setAiMemory
			);
	}, [chosenCard]);

	// watcher for turn useState
	useEffect(() => {
		console.log(`TURN : ${turn}`);
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
			(async () => {
				await pause(2000);
				setShowGameResult(true);
			})();
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
				<PlayPageHeader hp={hp} enemyHp={enemyHp} />

				{/* card playing arena */}
				<PlayPageArena board={board} handleClick={handleClick} />

				{/* footer arena */}
				<div className="flex flex-col"></div>
			</div>
		</>
	);
}
