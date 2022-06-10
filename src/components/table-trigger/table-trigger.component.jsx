import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./table-trigger.styles.scss";

const TableTrigger = ({ icon, rotation }) => {
  return (
    <div className="trigger-containter">
      <h3>Course List</h3>
      <div className="icon-container">
        {!icon && rotation && (
          <FontAwesomeIcon icon={faChevronDown} spin className="icon-rotate" />
        )}
        {!icon && !rotation && <FontAwesomeIcon icon={faChevronDown} />}
        {icon && rotation && (
          <FontAwesomeIcon
            icon={faChevronUp}
            spin
            className="icon-rotate-reverse"
          />
        )}
        {icon && !rotation && <FontAwesomeIcon icon={faChevronUp} />}
      </div>
    </div>
  );
};

export default TableTrigger;
