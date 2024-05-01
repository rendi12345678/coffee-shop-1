import "./styles/style.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Navbar from "./components/layout/Navbar.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route path={path} element={element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
