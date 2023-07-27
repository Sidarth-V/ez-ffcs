import { Outlet } from "react-router-dom";
import "./sidebar.styles.scss";

const Sidebar = () => {
  return (
    <div className="container">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
