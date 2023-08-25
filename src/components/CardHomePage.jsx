export default function CardHomePage({ urlCard, urlChar }) {
  return (
    <>
      <div>
        <img src={urlCard} alt="card" className="w-[20rem]" />
        <img src={urlChar} alt="" className="" />
      </div>
    </>
  );
}
