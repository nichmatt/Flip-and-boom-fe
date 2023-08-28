import { NavLink } from "react-router-dom";
export default function Register({ statusSetter }) {
  return (
    <>
      <div
        className=" flex-col text-white  px-[80px] pb-[90px] flex text-[1.25rem] items-center backdrop-blur-[2px] bg-[rgba(239,239,239,0.8)] rounded-[20px]"
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
            className="bg-transparent focus:outline-none"
          />
        </div>
        <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px] ">
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent focus:outline-none"
          />
        </div>
        <div className="border-b-[1px] border-white p-[7px] my-[7px] font-semibold italic tracking-tighter w-[300px] ">
          <input
            type="Password"
            placeholder="Password"
            className="bg-transparent focus:outline-none"
          />
        </div>
        <NavLink
          className="py-[5px] text-[12px] w-full text-blue-500"
          onClick={() => statusSetter()}
        >
          Already have account? Play now!
        </NavLink>
        <div className="w-[90px] cursor-[url(/assets/logo/lighter.svg),_pointer]">
          <img
            className="absolute w-[60px] left-[72%] hover:opacity-100 opacity-100 cursor-[url('/assets/lighter.svg'),_pointer] rounded-full"
            src="/assets/logo/logo-05.png"
            alt=""
          />
          <img
            className="absolute w-[60px] left-[72%] hover:opacity-0 opacity-100 hover:hidden cursor-[url('/assets/lighter.svg'),_pointer] rounded-full"
            src="/assets/logo/logo-05-unactive.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
