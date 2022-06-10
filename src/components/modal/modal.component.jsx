import ReactModal from "react-modal";
import FeedbackForm from "../feedback-form/feedback-form.component";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./modal.styles.scss";
import axios from "axios";

ReactModal.setAppElement("#root");

const Modal = ({
  showModal,
  handleCloseModal,
  facultyName,
  rating,
  feedback,
  onFeedbackChange,
  id,
}) => {
  const onFormSumbit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/setFeedBack", {
        id: id,
        feedback: e.target.feedback.value,
        rating: e.target.rating.value,
      })
      .then((response) => {
        onFeedbackChange();
      })
      .catch(function (error) {
        console.log(error);
      });
    handleCloseModal();
  };

  return (
    <ReactModal
      isOpen={showModal}
      contentLabel="onRequestClose Example"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          position: "absolute",
          top: "100px",
          left: "100px",
          right: "100px",
          bottom: "100px",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className="modal-header-container">
        <h1>
          Set <i>{facultyName}</i> rating
        </h1>
        <button onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faTimes} size="2xl" className="logo" />
        </button>
      </div>
      <FeedbackForm
        rating={rating}
        onSubmitHandler={onFormSumbit}
        feedback={feedback}
      />
    </ReactModal>
  );
};

export default Modal;
