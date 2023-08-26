import { NavLink } from "react-router-dom";

export default function SIdeBar() {
  return (
    <>
      <div className="fixed h-[100vh] w-[23vw] bg-[#F4F4F4] rounded-br-3xl">
        <div>
          <img
            src="../../public/assets/logo/logo-03-shadow-01.png"
            alt="logo"
            className="mt-[100px] w-[220px] mx-auto"
          />
        </div>
        <div className="m-[auto] px-[30px] mx-[auto] text-center">
          <ul
            className="font-basefont italic font-semibold"
            style={{ fontSize: "20px", color: "#2a2550" }}
          >
            <li className="my-[25px]">
              <NavLink>PLAY</NavLink>
            </li>
            <li className="my-[25px]">
              <NavLink>SHOP</NavLink>
            </li>
            <li className="my-[25px]">
              <NavLink>PROFILE</NavLink>
            </li>
            <li className="my-[25px]">
              <NavLink>LEADERBOARDS</NavLink>
            </li>
            <li className="my-[25px]">
              <NavLink>NEWS</NavLink>
            </li>
            <li className="my-[60px]">
              <NavLink>LOGOUT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
