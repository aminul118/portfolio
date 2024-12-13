import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Page404 from "../pages/ErrorPage/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Page404/>,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
    ],
  },
]);

export default router;