import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import ErrorPage from "../components/shared/ErrorPage";
import HomePage from "../pages/HomePage";
// import Register from "../pages/SignUp";
// import Login from "../pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      // {
      //   path: "login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: 'register',
      //   element: <Register></Register>
      // },
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);

export default router;