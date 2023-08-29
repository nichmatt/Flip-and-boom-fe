import { useSelector } from "react-redux";
import { useState } from "react";

import powerup1 from "/power-up/powerup-01.svg";
import powerup2 from "/power-up/powerup-02.svg";
import powerup3 from "/power-up/powerup-03.png";

export default function PlayPageFooter({ turn, hp, setHp }) {
	const { profile } = useSelector((state) => state.userReducer);

	const [pu1, setPu1] = useState(true);

	const handleClick1 = () => {
		if (turn != "user") return;

		if (hp > 900) return;

		setHp(hp + 100);

		setPu1(false);

		return;
	};

	return (
		<>
			<div className="w-full h-24 pt-5 flex flex-col">
				<div className="w-full border-t-2 border-t-[#D98F00]"></div>
				<div className="flex justify-between px-20 items-center h-full">
					<div
						className="flex font-semibold text-2xl"
						style={{ textShadow: "0.5px 0.1px 5px" }}
					>
						<i className="fa-solid fa-money-bill-1-wave text-[#ffb800] py-[4px]"></i>
						<p className="pl-[10px] text-[#ffb800] italic">:</p>
						<p className="pr-[30px] pl-[10px] text-[#ffb800] italic">
							{profile?.balance}
						</p>
					</div>
					<div className="flex gap-x-6 items-center">
						<h1
							className="text-[#ffb800] italic font-semibold text-2xl"
							style={{ textShadow: "1px 1px 10px" }}
						>
							POWER UPS
						</h1>
						<div className="w-14 h-14 cursor-pointer duration-500 hover:scale-[1.75] hover:-translate-y-4">
							{pu1 && <img src={powerup1} onClick={handleClick1} />}
						</div>
						<div className="w-14 h-14 cursor-pointer duration-500 hover:scale-[1.75] hover:-translate-y-4">
							<img src={powerup2} />
						</div>
						<div className="w-14 h-14 cursor-pointer duration-500 hover:scale-[1.75] hover:-translate-y-4">
							<img src={powerup3} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
