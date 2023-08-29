// npm packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// components
import GameResult from "../components/GameResult";
import PlayPageHeader from "../components/PlayPageHeader";
import PlayPageArena from "../components/PlayPageArena";
import PlayPageFooter from "../components/PlayPageFooter";

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
	const navigate = useNavigate();

	// state from redux
	const { gameMode } = useSelector((state) => state.gameModeReducer);

	// collection of useState
	const [board, setBoard] = useState([]);
	const [hp, setHp] = useState(1);
	const [enemyHp, setEnemyHp] = useState(1);
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
	const cpuTurnParameters = {
		board,
		setEnemyHp,
		enemyHp,
		setTurn,
		setHp,
		hp,
		setBoard,
		aiMemory,
		setAiMemory,
	};

	// created lifecycle
	useEffect(() => {
		gameMode == "HOME" && navigate("/home");

		createdLifecycle(setBoard);

		(async () => {
			await pause();
			setTurn("user");
		})();
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
				case "EAZY":
					cpuTurnRandom(cpuTurnParameters);
					break;

				case "MEDIUM":
					Math.ceil(Math.random() * 100) < 25
						? cpuTurnAccurate(cpuTurnParameters)
						: cpuTurnRandom(cpuTurnParameters);
					break;

				case "HARD":
					Math.ceil(Math.random() * 100) < 60
						? cpuTurnAccurate(cpuTurnParameters)
						: cpuTurnRandom(cpuTurnParameters);
					break;

				default:
					cpuTurnAccurate(cpuTurnParameters);
					break;
			}
		}
	}, [turn]);

	// watcher for enemyHp useState
	useEffect(() => {
		if (enemyHp <= 0 || hp <= 0) {
			(async () => {
				await pause();
				setShowGameResult(true);
			})();
		}
	}, [enemyHp, hp]);

	// component that is being returned
	return (
		<>
			<div
				className="min-h-screen h-full w-full flex flex-col cursor-default"
				style={{
					background:
						"linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
				}}
			>
				{/* show game result after one of the hp reach 0 */}
				{showGameResult && <GameResult hp={hp} totalTurn={totalTurn} />}

				{/* health bar for player and enemy */}
				<PlayPageHeader
					hp={hp}
					enemyHp={enemyHp}
					setHp={setHp}
					setEnemyHp={setEnemyHp}
          turn={turn}
				/>

				{/* card playing arena */}
				<PlayPageArena board={board} handleClick={handleClick} />

				{/* footer arena */}
				<PlayPageFooter turn={turn} hp={hp} setHp={setHp} />
			</div>
		</>
	);
}
