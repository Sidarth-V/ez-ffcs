import MakeTableForm from "../../components/make-table-form/make-table-form.component";
import TimeTableList from "../../components/timetable-list/timetable-list.component";
import { useState, useEffect } from "react";
import axios from "axios";
import "./make-tt.styles.scss";

const MakeTimeTable = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [allConfigs, setAllConfigs] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/allTeachers")
      .then((response) => {
        return response.data;
      })
      .then((users) => {
        setTeachers(users);
      });
    axios
      .get("http://localhost:8000/allCourses")
      .then((response) => {
        return response.data;
      })
      .then((courses) => {
        setAllCourses(courses);
      });

    axios
      .get("http://localhost:8000/allTimetables")
      .then((response) => {
        return response.data;
      })
      .then((allConfigs) => {
        setAllConfigs(allConfigs);
      });
  }, []);

  return (
    <div className="make-tt-container">
      <MakeTableForm allCourses={allCourses} allTeachers={teachers} />
      <TimeTableList allConfigs={allConfigs} />
    </div>
  );
};

export default MakeTimeTable;
