import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import ErrorPage from "../components/shared/ErrorPage";
import HomePage from "../pages/HomePage";
import SingleBlog from "../pages/SingleBlog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: '/singleBlog/:id',
        element: <SingleBlog></SingleBlog>,
        loader: ({params}) => fetch(`posts.json/${params.id}`)
      }
    ],
  },
]);

export default router;