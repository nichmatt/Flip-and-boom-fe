export default function PowerUpModal({
	balance,
	setPu1,
	setPu2,
	setPu3,
	powerup1,
	powerup2,
	powerup3,
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
					className={`w-[37.5%] h-[42.5%] backdrop-blur-[2px] rounded-[5px] text-white font-bold animate__animated animate__slideInDown flex flex-col px-10 justify-center items-center italic tracking-tighter`}
					style={{
						background:
							"linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
					}}
					onClick={handleClick2}
				>
					<div className="w-16 h-16 mb-6">
						<img
							src={
								puModal == "pu1"
									? powerup1
									: puModal == "pu2"
									? powerup2
									: powerup3
							}
						/>
					</div>
					<div className="flex w-full">
						<div className="flex flex-1 justify-between pr-2">
							<div className="text-gray-300 pl-20">POWER UP</div>
							<div>:</div>
						</div>
						<div className="w-[15rem]">
							{puModal == "pu1" ? "HEAL" : puModal == "pu2" ? "SKIP" : "HINT"}
						</div>
					</div>

					<div className="flex w-full">
						<div className="flex flex-1 justify-between pr-2">
							<div className="text-gray-300 pl-20">DESCRIPTION</div>
							<div>:</div>
						</div>
						<div className="w-[15rem]">
							{puModal == "pu1"
								? "HEAL 100 HP"
								: puModal == "pu2"
								? "SKIP 1 ENEMY'S TURN"
								: "FLASH 2 MATCHING CARDS RANDOMLY"}
						</div>
					</div>

					<div className="flex w-full">
						<div className="flex flex-1 justify-between pr-2">
							<div className="text-gray-300 pl-20">PRICE</div>
							<div>:</div>
						</div>
						<div className="w-[15rem]">{puModal == "pu3" ? 30 : 10}</div>
					</div>

					<div className="flex w-full">
						<div className="flex flex-1 justify-between pr-2">
							<div className="text-gray-300 pl-20">YOUR BALANCE</div>
							<div>:</div>
						</div>
						<div className="w-[15rem]">{balance}</div>
					</div>

					<div className="mt-6">DO YOU WANT TO BUY THIS POWER UP ?</div>
					<div className="flex justify-between w-full px-44">
						<button type="button">YES</button>
						<button type="button">CANCEL</button>
					</div>
				</div>
			</div>
		</>
	);
}
