import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div
        className=" flex-col  px-[80px] pb-[90px] flex text-[1.25rem] text-black items-center backdrop-blur-[2px] bg-[rgba(255,255,255,0.2)] rounded-[20px]"
        style={{
          boxShadow:
            "35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -3px -3px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);",
        }}
      >
        <div className="w-[200px]">
          <img src="/assets/logo/logo-03-shadow-01.png" alt="logo" />
        </div>
        <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px]">
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent"
          />
        </div>
        <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px]">
          <input type="text" placeholder="Email" className="bg-transparent" />
        </div>
        <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px]">
          <input
            type="Password"
            placeholder="Password"
            className="bg-transparent"
          />
        </div>
        <NavLink className="py-[5px] text-[12px] w-full text-blue-500">
          Don't have account yet? Join Us Now!
        </NavLink>
        <div className="w-[90px] cursor-[url(/assets/logo/lighter.svg),_pointer]">
          <img
            className="absolute w-[80px] left-[72%] hover:opacity-100 opacity-0 cursor-[url('/assets/lighter.svg'), auto]"
            src="/assets/logo/logo-05.png"
            alt=""
          />
          <img
            className="absolute w-[80px] left-[72%] hover:opacity-0 opacity-100 hidden cursor-[url('/assets/lighter.svg'),_pointer]"
            src="/assets/logo/logo-05-unactive.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
