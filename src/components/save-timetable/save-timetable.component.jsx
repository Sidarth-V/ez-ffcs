import "./save-timetable.styles.scss";
import SaveTimetableModal from "../save-tt-modal/save-tt-modal.components";
import { Fragment, useState } from "react";

const SaveTimetable = ({ config }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      <button className="save-timetable" onClick={handleOpenModal}>
        Save Timetable
      </button>
      <SaveTimetableModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        config={config}
      />
    </Fragment>
  );
};

export default SaveTimetable;
