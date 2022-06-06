import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ data }) => {
  return (
    <NavLink
      to={data.to}
      className="nav-links"
      style={({ isActive }) => ({
        color: isActive ? "#1c212d" : "white",
        background: isActive ? "rgb(246, 179, 78)" : "#1c212d",
      })}
    >
      <FontAwesomeIcon icon={data.icon} size="xs" className="icon" />
      {data.text}
    </NavLink>
  );
};

export default NavItem;
