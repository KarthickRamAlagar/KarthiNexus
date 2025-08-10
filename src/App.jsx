import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import MainPage from "./pages/MainPage";
import LandingPage from "./pages/LandingPage";
import ProjectPages from "./pages/ProjectPages";
import ProtectedRoutes from "./components/ProtectedRoutes";
import NotFound from "./components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/RenderGate",
    element: <AppLayout />,
    children: [
      {
        index: true, //  "/RenderGate" will render MainPage by default
        element: (
          <ProtectedRoutes>
            <MainPage />
          </ProtectedRoutes>
        ),
      },
      {
        path: "my-products", //  "/RenderGate/my-products"
        element: (
          <ProtectedRoutes>
            <ProjectPages />
          </ProtectedRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
