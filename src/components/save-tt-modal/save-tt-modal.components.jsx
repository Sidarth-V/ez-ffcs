import ReactModal from "react-modal";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./save-tt-modal.styles.scss";
import { toast } from "react-toastify";
import axios from "axios";

ReactModal.setAppElement("#root");

const SaveTimetableModal = ({ showModal, handleCloseModal, config }) => {
  const onFormSumbit = (e) => {
    const toastId = toast.loading("Please wait...", { theme: "dark" });
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}save-timetable`, {
        timeTable: config,
        timeTableName: e.target.timetableName.value,
      })
      .then((response) => {
        toast.update(toastId, {
          render: `Saved timetable`,
          type: "success",
          isLoading: false,
          autoClose: 2000,
          delay: 10,
        });
      })
      .catch((error) => {
        toast.update(toastId, {
          render: `${error.response.data.message}`,
          type: "error",
          isLoading: false,
          autoClose: 2000,
          delay: 10,
        });
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
          top: "25%",
          left: "25vw",
          right: "25vw",
          bottom: "auto",
          width: "50vw",
          border: "1px solid rgb(32, 30, 30)",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          backgroundColor: "rgb(32, 30, 30)",
        },
      }}
    >
      <div className="modal-header-container">
        <h1>Save timetable as</h1>
        <button onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faTimes} size="2xl" className="logo" />
        </button>
      </div>
      <div className="save-tt-form-container">
        <form onSubmit={onFormSumbit}>
          <fieldset>
            <legend>Timetable Name</legend>
            <textarea
              rows={1}
              placeholder="name of timetable"
              name="timetableName"
              required
            />
          </fieldset>
          <div className="save-tt-submit">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </ReactModal>
  );
};

export default SaveTimetableModal;
