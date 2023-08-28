import { useNavigate } from "react-router-dom";

export default function CardHomePage({
  urlCard,
  urlChar,
  gameMode,
  colorMode,
}) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="relative flex justify-center"
        onClick={() => navigate("/play")}
      >
        <img src={urlCard} alt="card" className="w-[15rem]" />
        <img
          src={urlChar}
          alt=""
          className="absolute w-[170px] top-[90px] m-auto"
        />
      </div>
      <div
        className="z-20 text-center absolute top-[73%] w-full text-[1.5rem] font-bold tracking-tighter italic "
        style={{ color: colorMode }}
      >
        {gameMode}
      </div>
    </>
  );
}
