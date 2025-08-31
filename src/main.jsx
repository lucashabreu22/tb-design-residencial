import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

//Pages Import
import Home from "./pages/Home/index.jsx";
import ServicoPage from "./pages/Servicos/index.jsx";
import Projetos from "./pages/Projetos/index.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/servicos", element: <ServicoPage /> },
      { path: "/portfolio", element: <Projetos /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
