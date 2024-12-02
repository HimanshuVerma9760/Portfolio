import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
