import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
//Pages Import
import Home from "./pages/Home/index.jsx";
import ServicesPage from "./pages/Services/index.jsx";
import Projects from "./pages/Projects/index.jsx";
import AboutPage from "./pages/About/index.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/servicos", element: <ServicesPage /> },
      { path: "/portfolio", element: <Projects /> },
      { path: "/sobre", element: <AboutPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
