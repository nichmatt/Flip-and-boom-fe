import NavigationBar from "../components/Navigation";
import SIdeBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function BaseLayout() {
  return (
    <>
      <NavigationBar />
      <div className="flex">
        <SIdeBar />
        {/* <HomePage /> */}
        <Outlet />
      </div>
    </>
  );
}
