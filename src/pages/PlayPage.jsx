import { useState, useEffect } from "react";

import CardInPlay from "../components/CardInPlay";

import { boardBeforeRandomized, randomNumber } from "../helpers";

import { handleUserCardClick, cpuTurn } from "../codeSnippets";

export default function PlayPage() {
	const boardAfterRandomized = [];

	const [board, setBoard] = useState([]);
	const [hp, setHp] = useState(20);
	const [enemyHp, setEnemyHp] = useState(20);

	const [chosenCard, setChosenCard] = useState([]);
	const [turn, setTurn] = useState("user");

	const resetChosenCard = () => setChosenCard([]);

	const handleClick = (e) => {
		handleUserCardClick(e, turn, setHp, setTurn, chosenCard, setChosenCard, hp);
	};

	useEffect(() => {
		while (boardBeforeRandomized?.length) {
			const randomNum = randomNumber(boardBeforeRandomized);

			const getOneRandomCard = boardBeforeRandomized?.splice(randomNum, 1);

			boardAfterRandomized.push(getOneRandomCard[0]);
		}

		setBoard(boardAfterRandomized);
	}, []);

	useEffect(() => {
		if (chosenCard.length == 2) {
			if (chosenCard[0][0] == chosenCard[1][0]) {
				setEnemyHp(enemyHp - +chosenCard[0][0]);

				const clonedBoard = structuredClone(board);

				chosenCard.forEach((el) => {
					clonedBoard[+el[1]].shown = false;
				});

				setBoard(clonedBoard);
			}

			resetChosenCard();

			setTurn("cpu");
		}
	}, [chosenCard]);

	useEffect(() => {
		console.log(turn);
		if (turn == "cpu") {
			cpuTurn(board, setEnemyHp, enemyHp, setTurn, setHp, hp, setBoard);
		}
	}, [turn]);

	return (
		<>
			<div className="min-h-screen" style={{
					background:
						"linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
				}}>
				<div className="flex justify-between">
					<div>HP: {hp}</div>
					<div>Enemy HP: {enemyHp}</div>
				</div>

				<div className="grid grid-cols-10 gap-y-5">
					{board.map((card, index) => {
						return (
							<CardInPlay
								key={index}
								card={card.value}
								shown={card.shown}
								index={index}
								handleClick={handleClick}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
