import { createBrowserRouter } from "react-router-dom";

import BaseLayout from "../layout/BaseLayout";
import SuperBaseLayout from "../layout/SuperBaseLayout";

import HomePage from "../pages/HomePage";
import PlayPage from "../pages/PlayPage";
import ShopPage from "../pages/ShopPage";
import LeaderBoardPage from "../pages/LeaderBoardPage";
import ProfilePage from "../pages/ProfilePage";
import InventoryPage from "../pages/InventoryPage";
import NewsPage from "../pages/NewsPage";

const router = createBrowserRouter([
  {
    element: <SuperBaseLayout />,
    children: [
      {
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
    ],
  },
]);

export default router;
