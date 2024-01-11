import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import RootLayout from "./components/Layouts/RootLayout";
import Products from "./pages/Products";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
//Initialisation des routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
