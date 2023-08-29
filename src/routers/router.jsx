import { createBrowserRouter, redirect } from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import SuperBaseLayout from "../layout/SuperBaseLayout";

import HomePage from "../pages/HomePage";
import PlayPage from "../pages/PlayPage";
import ShopPage from "../pages/ShopPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import ProfilePage from "../pages/ProfilePage";
import InventoryPage from "../pages/InventoryPage";
import NewsPage from "../pages/NewsPage";
import LoadingScreen from "../components/LoadingScreen";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    element: <SuperBaseLayout />,
    children: [
      {
        element: <BaseLayout />,
        loader: () => {
          const token = localStorage.getItem("access_token");
          if (!token) throw redirect("/");
          // console.log("loader");
          return null;
        },
        children: [
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/leaderboard",
            element: <LeaderBoardPage />,
          },
          {
            path: "/shop",
            element: <ShopPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/inventory",
            element: <InventoryPage />,
          },
          {
            path: "/profile/inventory",
            element: <InventoryPage />,
          },
          {
            path: "/news",
            element: <NewsPage />,
          },
        ],
      },
      { path: "/play", element: <PlayPage /> },
      { path: "/loading", element: <LoadingScreen /> },
    ],
  },
  {
    path: "/",
    element: <LandingPage />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) throw redirect("/home");
      return null;
    },
  },
]);

export default router;
