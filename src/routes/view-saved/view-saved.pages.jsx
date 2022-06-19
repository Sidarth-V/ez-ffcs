import SavedTimetableList from "../../components/saved-timetables-list/saved-timetables-list.component";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewSaved = () => {
  const [allConfigs, setAllConfigs] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}view-saved`)
      .then((response) => {
        setAllConfigs(response.data.data.timeTables);
      });
  }, []);

  return (
    <div>
      <SavedTimetableList allConfigs={allConfigs} />
    </div>
  );
};

export default ViewSaved;
