import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import ErrorPage from "../components/shared/ErrorPage";
import HomePage from "../pages/HomePage";


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
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
]);

export default router;