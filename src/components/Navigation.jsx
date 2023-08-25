export default function NavigationBar() {
  return (
    <>
      <section
        id="NavigationBar-Section"
        className="h-[80px] bg-[#2a2550] w-[100vw] mw-[100vw] font-basefont font-semibold tracking-tight"
        style={{ position: "fixed ", top: "0" }}
      >
        <div className="h-[25px] bg-[#ffb800]">
          <marquee
            direction="left"
            behavior="scroll|slide|alternate"
            scrollamount="number"
            scrolldelay="number"
            loop="number"
            style={{ textShadow: "0.1px 0.1px 1px #2a2550", color: "#2a2550" }}
          >
            Welcome to Flip & Boom
          </marquee>
        </div>
        <div className="flex justify-end py-4 mx-[10vw]">
          <i
            className="fa-solid fa-money-bill-1-wave text-[#ffb800] py-[4px] "
            style={{ textShadow: "0.5px 0.1px 5px" }}
          ></i>
          <p
            style={{ textShadow: "1px 1px 10px" }}
            className="px-[30px] text-[#ffb800] italic"
          >
            1.000
          </p>
          <p className="px-[30px] text-[#fff] italic">LV : 10</p>
          <p className="px-[30px] text-[#fff] italic">Jhon Doe</p>
        </div>
      </section>
    </>
  );
}
