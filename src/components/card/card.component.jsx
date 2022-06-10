import { useState } from "react";
import "./card.styles.scss";
import Modal from "../modal/modal.component";

const Card = ({ teacher, onFeedbackChange }) => {
  const { empId, empName, courseCode, rating, feedback, _id } = teacher;
  let className;
  if (rating <= 0) {
    className = "tag tag-red";
  } else if (rating >= 1 && rating <= 3) {
    className = "tag tag-yellow";
  } else if (rating >= 4) {
    className = "tag tag-green";
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
        src={`https://avatars.dicebear.com/api/adventurer/${empId}.svg?background=%232a3247e8`}
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
