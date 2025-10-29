import { lazy } from "react";
import { createBrowserRouter } from "react-router";
const Login = lazy(() => import("../pages/Auth/Login/Login"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Login },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
