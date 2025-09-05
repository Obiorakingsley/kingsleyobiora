import "./index.css";
import "./App.scss";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Homepage from "./Pages/Homepage";
import About from "./Component/About/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<div>Dashboard</div>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
