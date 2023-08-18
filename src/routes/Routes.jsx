import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layout/Layouts";
import ErrorPage from "../components/shared/ErrorPage";
import HomePage from "../pages/HomePage";
import SingleBlog from "../pages/SingleBlog";
import Pricing from "../pages/PricingPage";
import PricingPage from "../pages/PricingPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";


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
      },
      {
        path: '/pricing',
        element: <PricingPage></PricingPage>
      },
      {
        path: '/about',
        element: <AboutPage></AboutPage>
      },
      {
        path: '/contact',
        element: <ContactPage></ContactPage>
      }
    ],
  },
]);

export default router;