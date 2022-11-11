import { useState } from "react";
import "./card.styles.scss";
import Modal from "../modal/modal.component";

const Card = ({ teacher, onFeedbackChange }) => {
  const { empName, courseCode, rating, feedback, _id } = teacher;
  let className;
  switch (rating) {
    case 1:
      className = "tag tag-red";
      break;
    case 2:
      className = "tag tag-orange";
      break;
    case 3:
      className = "tag tag-grey";
      break;
    case 4:
      className = "tag tag-blue";
      break;
    case 5:
      className = "tag tag-green";
      break;
    default:
      className = "tag tag-grey";
      break;
  }

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="card-container">
      <img
        src={`https://avatars.dicebear.com/api/adventurer/${empName}.svg?background=%232a222936`}
        alt="rover"
      />
      <div className="flex-container">
        <div className="spacer"></div>
        <h2>{empName}</h2>
        <div className={className}>{rating}</div>
      </div>
      <span>{feedback}</span>
      <div className="card-cc-container">
        <small>{courseCode}</small>
        <button onClick={handleOpenModal}>Edit</button>
        <Modal
          showModal={showModal}
          handleCloseModal={handleCloseModal}
          facultyName={empName}
          rating={rating}
          feedback={feedback}
          onFeedbackChange={onFeedbackChange}
          id={_id}
        />
      </div>
    </div>
  );
};

export default Card;
