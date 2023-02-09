import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.styles.scss";

const NavBar = () => {
  return (
    <div>
      <div className="topbar">
        <div className="logo-container">
          <FontAwesomeIcon
            icon={faBoltLightning}
            size="xl"
            className="logo"
            transform={{ rotate: -30 }}
          />
          <span>ezFFCS</span>
        </div>
        <div className="get-database">
          <form>
            <label>
              Sheets Link:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
      </div>
    </div>
  );
};

export default NavBar;
