import { Outlet } from "react-router-dom";
import NavItem from "../nav-link/nav-item.component";
import {
  faHome,
  faTable,
  faChalkboardTeacher,
  faSave,
  faBoltLightning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.styles.scss";

const listSidebar = [
  {
    id: "1",
    to: "/",
    text: "Dashboard",
    icon: faHome,
  },
  {
    id: "2",
    to: "/make-tt",
    text: "Make Timetable",
    icon: faTable,
  },
  {
    id: "3",
    to: "/view-teachers",
    text: "View Teachers",
    icon: faChalkboardTeacher,
  },
  {
    id: "4",
    to: "/view-saved",
    text: "View Saved",
    icon: faSave,
  },
];

const Sidebar = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo-container">
          <FontAwesomeIcon
            icon={faBoltLightning}
            size="lg"
            className="logo"
            transform={{ rotate: -30 }}
          />
          <h1>ezFFCS</h1>
        </div>
        <hr className="divider"></hr>
        <div className="nav-links-container">
          {listSidebar.map((element) => {
            return <NavItem key={element.id} data={element} />;
          })}
        </div>
        <hr className="divider"></hr>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
