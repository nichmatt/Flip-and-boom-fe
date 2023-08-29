import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGameMode } from "../actionCreators";

export default function CardHomePage({
  urlCard,
  urlChar,
  gameMode,
  colorMode,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setGameMode(gameMode));

    navigate("/play");
  };

  return (
    <>
      <div className="relative flex justify-center" onClick={handleClick}>
        <img src={urlCard} alt="card" className="w-[15rem]" />
        <img
          src={urlChar}
          alt=""
          className="absolute w-[170px] top-[90px] m-auto"
        />
      </div>
      <div
        className="z-20 text-center absolute top-[73%] w-full text-[1.5rem] font-bold tracking-tighter italic "
        style={{ color: colorMode, textShadow: "0.5px 0.1px 5px" }}
      >
        {gameMode}
      </div>
    </>
  );
}
