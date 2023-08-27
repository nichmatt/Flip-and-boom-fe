import NavigationBar from "../components/Navigation";
import SIdeBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <NavigationBar />
      <div
        className="flex min-h-screen"
        style={{
          background:
            "linear-gradient(180deg, #251D3A 0%, #323569 99.99%, rgba(37, 29, 58, 0.00) 100%)",
        }}
      >
        <SIdeBar />
        <Outlet />
        {/* <div className="overflow-y-auto"></div> */}
      </div>
    </>
  );
}
