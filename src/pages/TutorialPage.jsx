export default function TutorialPage() {
  return (
    <section
      className="min-h-[100vh] w-[100vw] "
      style={{
        marginTop: "30px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          className=" w-[60vw] mt-[6vw] ml-[30Vw] bg-[rgba(0,0,0,0.50)] rounded-md px-[30px] py-[10vh]"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div className="text-white  text-center m-auto ">
            <div className="text-3xl font-bold italic my-[20px]">
              HOW TO PLAY
            </div>
            <img
              src="/assets/tutorial/card.png"
              alt=""
              className="mx-auto my-[40px]"
            />
            <div className=" w-[60%] text-center m-auto">
              You have to defeat your enemy by choosing the same cards to damage
              your enemy. Becareful for there are many bombs that can demage
              your self if you are choosing it. You can use power up by clicking
              powerup button to heal, attack, or asking computer the best cards
              to choose
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
