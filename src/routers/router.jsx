import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";

import PlayPage from "../pages/PlayPage";
import BaseLayout from "../layout/BaseLayout";
import ShopPage from "../pages/ShopPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import ProfilePage from "../pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
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
    ],
  },
  {
    path: "/play",
    element: <PlayPage />,
  },
]);

export default router;
