import "./card.styles.scss";

const Card = ({ teacher }) => {
  const { empId, empName, courseCode, rating, feedback } = teacher;
  let className;
  if (rating <= 0) {
    className = "tag tag-red";
  } else if (rating >= 1 && rating <= 3) {
    className = "tag tag-yellow";
  } else if (rating >= 4) {
    className = "tag tag-green";
  }

  return (
    <div className="card-container">
      <img
        src={`https://avatars.dicebear.com/api/adventurer/${empId}.svg?background=%232a3247e8`}
        alt="rover"
      />
      <div className="flex-container">
        <div className="spacer"></div>
        <h2>{empName}</h2>
        <div className={className}>{rating}</div>
      </div>
      <p>{feedback}</p>
      <div className="card-cc-container">
        <small>{courseCode}</small>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Card;
