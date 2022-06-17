import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RatingNumber = ({
  newRating,
  val,
  labelClass,
  faIcon,
  faClass,
  func,
}) => {
  console.log(faIcon);
  return (
    <label className={labelClass}>
      <input
        type="radio"
        name="rating"
        className={labelClass}
        id={labelClass}
        value={val}
        checked={newRating === val}
        onClick={func}
      />
      <FontAwesomeIcon icon={faIcon} className={faClass} />
    </label>
  );
};

export default RatingNumber;
