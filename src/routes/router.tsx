import { createBrowserRouter, type RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ClassicPage from "../pages/Classic/ClassicPage";
import Landing from "../pages/Landing/Landing";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/classic", element: <ClassicPage /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
