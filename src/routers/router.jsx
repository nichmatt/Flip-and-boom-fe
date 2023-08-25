import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";

import PlayPage from "../pages/PlayPage";
import BaseLayout from "../layout/BaseLayout";
import ShopPage from "../pages/LeaderBoardPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";

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
        path: "/Leaderboard",
        element: <LeaderBoardPage />,
      },
    ],
  },
  {
    path: "/play",
    element: <PlayPage />,
  },
]);

export default router;
