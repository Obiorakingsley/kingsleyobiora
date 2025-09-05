import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

//type Props = {};

const Layout = () => {
  return (
    <div className="h-full">
      <Sidebar />
      <div className="sm:pl-24 sm:px-2 p-2 py-10 h-screen overflow-y-scroll scrollbar-hide">
        <span className="text-primary absolute sm:top-12 top-20 left-8 sm:left-28 font-Aurore -scroll-my-2.5">
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
