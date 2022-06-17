import axios from "axios";
import { useEffect, useState } from "react";
import SelectCourses from "../select-courses/select-courses.component";
import SelectTeacher from "../select-teacher/select-teacher.component";
import "./dropdown-group.styles.scss";

const DropdownGroup = ({
  allCourses,
  handleCourseCodeChange,
  handleTeacherChange,
  courseCode,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const courseCodeHandler = (event) => {
    if (event) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    handleCourseCodeChange(event);
  };

  useEffect(() => {
    axios
      .post("http://localhost:8000/teachersForCourse", {
        courseCode: courseCode,
      })
      .then((response) => {
        setFilteredTeachers(response.data);
      });
  }, [isDisabled, courseCode]);
  return (
    <div className="subject">
      <SelectCourses
        allCourses={allCourses}
        onCourseCodeChangeHandler={(event) => courseCodeHandler(event)}
      />

      <SelectTeacher
        allTeachers={filteredTeachers}
        onTeacherChangeHandler={(event) => handleTeacherChange(event)}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default DropdownGroup;
