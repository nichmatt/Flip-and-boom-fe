import Button from "../components/Button";
import SIdeBar from "../components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { tes } from "../actionCreators";

import CardHomePage from "../components/CardHomePage";
import NavigationBar from "../components/Navigation";


export default function HomePage() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const tesButton = (e) => {
    e.preventDefault();
    dispatch(tes(!loading));
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#251E34] flex">
        <SIdeBar />
        <div className="flex-1 w-full pt-36 justify-center items-center">
          <div className="flex justify-center items-center relative h-full">
            <div className="p-10 absolute rotate-[-20deg] left-[10%] hover:z-20 hover:scale-105 transition-all delay-75 ease-in-out hover:drop-shadow-md">
              <CardHomePage urlCard={"../../public/assets/card/orange-card.png"} />
            </div>
            <div className="p-10 absolute rotate-[-10deg] left-[25%] top-[10%] hover:z-20 hover:scale-105 transition-all delay-75 ease-in-out">
              <CardHomePage urlCard={"../../public/assets/card/blue-card.png"}/>
            </div>
            <div className="p-10 absolute rotate-[10deg] left-[40%] top-[11%] hover:z-20 hover:scale-105 transition-all delay-75 ease-in-out">
              <CardHomePage urlCard={"../../public/assets/card/magenta-card.png"}/>
            </div>
            <div className="p-10 absolute rotate-[20deg] left-[55%] hover:z-20 hover:scale-105 transition-all delay-75 ease-in-out">
              <CardHomePage urlCard={"../../public/assets/card/purple-card.png"}/>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
