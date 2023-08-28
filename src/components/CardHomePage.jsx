export default function CardHomePage({
  urlCard,
  urlChar,
  gameMode,
  colorMode,
}) {
  return (
    <>
      <div className="relative flex justify-center">
        <img src={urlCard} alt="card" className="w-[15rem]" />
        <img
          src={urlChar}
          alt=""
          className="absolute w-[170px] top-[90px] m-auto"
        />
      </div>
      <div className="z-20 text-center absolute top-[75%] left-[45%] text-[]">
        {gameMode}
      </div>
    </>
  );
}
