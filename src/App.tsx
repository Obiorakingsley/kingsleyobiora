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
import AboutPage from "./Component/About/About";
import ContactPage from "./Pages/ContactPage";
import Projects from "./Component/Projects/Project";
import SkillPage from "./Pages/SkillPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="project" element={<Projects />} />
      <Route path="skills" element={<SkillPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
