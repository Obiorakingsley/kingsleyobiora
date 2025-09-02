import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

//type Props = {};

const Layout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="pl-20 min-h-screen">
        <span className="text-primary absolute top-12 left-40 font-Aurore">
          &lt;body&gt;
        </span>
        <Outlet />
        <span className="text-primary absolute bottom-12 left-40 font-Aurore">
          &lt;/body&gt;
        </span>
        <br />
        <span className="text-primary absolute bottom-5 left-32 font-Aurore">
          &lt;/html&gt;
        </span>
      </div>
    </div>
  );
};

export default Layout;
