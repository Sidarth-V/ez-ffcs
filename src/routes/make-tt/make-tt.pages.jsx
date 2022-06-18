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
      .get(`${process.env.REACT_APP_BACKEND_URL}view-teachers`)
      .then((response) => {
        setTeachers(response.data.data.teachers);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}view-courses`)
      .then((response) => {
        convertToCourseOptions(response.data.data.courses);
      });
  }, []);

  const makeTimetables = (courses) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}all-timetables`, { courses })
      .then((response) => {
        setAllConfigs(response.data.data.timetables);
      });
  };

  const convertToCourseOptions = (courses) => {
    let options = courses.map((course) => {
      return {
        value: course.courseCode,
        label: `${course.courseCode} - ${course.courseTitle}`,
      };
    });
    setAllCourses(options);
  };

  return (
    <div className="make-tt-container">
      <MakeTableForm
        allCourses={allCourses}
        allTeachers={teachers}
        makeTimetablesHandler={makeTimetables}
      />
      <TimeTableList allConfigs={allConfigs} />
    </div>
  );
};

export default MakeTimeTable;
