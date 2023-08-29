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
        <div className="flex flex-col  m-[auto] px-[20px] mx-[auto] items-center">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "w-full bg-[#2a2550] text-center my-[5px] py-[5px] font-semibold italic text-xl text-[#ffb800] rounded-3xl x-[2vw]"
                : "w-full hover:bg-[#ffb800] text-center py-[5px] my-[5px] font-bold italic text-xl text-[#2a2550] duration-300"
            }
            to="/home"
          >
            PLAY
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "w-full bg-[#2a2550] text-center my-[5px] py-[5px] font-semibold italic text-xl text-[#ffb800] rounded-3xl x-[2vw]"
                : "w-full hover:bg-[#ffb800] text-center py-[5px] my-[5px] font-bold italic text-xl text-[#2a2550] duration-300"
            }
            to="/shop"
          >
            SHOP
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "w-full bg-[#2a2550] text-center my-[5px] py-[5px] font-semibold italic text-xl text-[#ffb800] rounded-3xl x-[2vw]"
                : "w-full hover:bg-[#ffb800] text-center py-[5px] my-[5px] font-bold italic text-xl text-[#2a2550] duration-300"
            }
            to="/profile"
          >
            PROFILE
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "w-full bg-[#2a2550] text-center my-[5px] py-[5px] font-semibold italic text-xl text-[#ffb800] rounded-3xl x-[2vw]"
                : "w-full hover:bg-[#ffb800] text-center py-[5px] my-[5px] font-bold italic text-xl text-[#2a2550] duration-300"
            }
            to="/leaderboard"
          >
            LEADERBOARD
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "w-full bg-[#2a2550] text-center my-[5px] py-[5px] font-semibold italic text-xl text-[#ffb800] rounded-3xl x-[2vw]"
                : "w-full hover:bg-[#ffb800] text-center py-[5px] my-[5px] font-bold italic text-xl text-[#2a2550] duration-300"
            }
            to="/news"
          >
            NEWS
          </NavLink>
        </div>
        <div>
          <div className="text-[20px] m-auto w-[250px] rounded-full shadow-md drop-shadow-2xl flex items-center justify-center text-[#2a2550] cursor-pointer">
            <i className="fa-solid fa-right-from-bracket m-5 hover:text-[#ffb800]"></i>
            <i class="fa-solid fa-volume-high  m-5 hover:text-[#ffb800]"></i>
            <i class="fa-solid fa-volume-xmark  m-5 hover:text-[#ffb800]"></i>
          </div>
        </div>
      </div>
    </>
  );
}
