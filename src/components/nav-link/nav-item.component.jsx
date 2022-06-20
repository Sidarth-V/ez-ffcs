import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav-item.styles.scss";

const NavItem = ({ data }) => {
  return (
    <NavLink
      to={data.to}
      className="nav-links"
      style={({ isActive }) => ({
        color: isActive ? "rgb(15, 17, 22)" : "white",
        background: isActive ? "rgb(246, 179, 78)" : "rgb(15, 17, 22)",
      })}
    >
      <FontAwesomeIcon icon={data.icon} size="xs" className="icon" />
      <span>{data.text}</span>
    </NavLink>
  );
};

export default NavItem;
