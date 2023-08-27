export default function CardHomePage({ urlCard, urlChar }) {
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
    </>
  );
}
