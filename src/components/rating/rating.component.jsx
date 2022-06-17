import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
const RatingNumber = ({newRating, val, labelClass, faIcon, faClass, func}) => {
    console.log(faIcon);
    return (
        <label className={labelClass}>
          <input
            type="radio"
            name="rating"
            className={labelClass}
            id={labelClass}
            value={val}
            checked={newRating===val}
            onClick={func}
          />
          <FontAwesomeIcon icon={faIcon} className={faClass} />
        </label>
    );
};

export default RatingNumber;