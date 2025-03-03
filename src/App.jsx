import "./App.css";
import Home from "./Components/Home/Home";
import { createHashRouter, RouterProvider } from "react-router-dom";
import LayOut from "./Components/LayOut/LayOut";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  const routes = createHashRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Portfolio",
          element: <Portfolio />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
