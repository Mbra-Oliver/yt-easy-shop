import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/UI/Layouts/RootLayout";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { checkUserAuthLoader, tokenLoader } from "./helpers/authManage";
import { logoutAction } from "./pages/auth/Logout";
//Initialisation des routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/login",
        element: <Login />,
        loader: checkUserAuthLoader,
      },
      {
        path: "/register",
        element: <Register />,
        loader: checkUserAuthLoader,
      },
      {
        path: "/logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
