import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

//type Props = {};

const Layout = () => {
  return (
    <div className="">
      <Sidebar />
      <div className="sm:pl-20 py-8 min-h-screen">
        <span className="text-primary absolute sm:top-12 top-20 left-8 sm:left-28 font-Aurore">
          &lt;body&gt;
        </span>
        <Outlet />
        <span className="text-primary absolute bottom-12 left-8 sm:left-28 font-Aurore">
          &lt;/body&gt;
        </span>
        <br />
        <span className="text-primary absolute bottom-5 sm:left-20 font-Aurore">
          &lt;/html&gt;
        </span>
      </div>
    </div>
  );
};

export default Layout;
