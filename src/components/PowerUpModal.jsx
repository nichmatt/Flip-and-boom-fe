export default function PowerUpModal({
	balance,
	setPu1,
	setPu2,
	setPu3,
	puModal,
	setPuModal,
}) {
	const handleClick = (e) => {
		setPuModal(false);
	};

	const handleClick2 = (e) => {
		e.stopPropagation();
	};

	return (
		<>
			<div
				className={`w-full h-full top-0 left-0 absolute bg-[rgba(0,0,0,0.7)] z-30 flex justify-center items-center animate__animated animate__fadeIn`}
				onClick={handleClick}
			>
				<div
					className={`w-1/3 h-2/3 backdrop-blur-[2px] bg-[rgba(8,8,8,0.8)] rounded-[20px] text-white font-bold animate__animated animate__slideInDown flex flex-col px-10 justify-center items-center text-xl italic tracking-tighter`}
					style={{
						boxShadow:
							"35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -3px -3px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
					}}
					onClick={handleClick2}
				>
					<div>YOUR BALANCE : {balance}</div>
					<div>
						POWER UP :{" "}
						{puModal == "pu1" ? "HEAL" : puModal == "pu2" ? "DAMAGE" : "CARD HINT"}
					</div>
          <div>DESCRIPTION : {puModal == "pu1" ? "heal 100 HP" : puModal == "pu2" ? "reduce 100 enemy's HP" : "hint of 2 highest damage "}</div>
					<div>price: {puModal == "pu3" ? 30 : 10}</div>
				</div>
			</div>
		</>
	);
}
