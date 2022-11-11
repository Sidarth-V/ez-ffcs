import axios from "axios";
import { useEffect, useState } from "react";
import SelectCourses from "../select-courses/select-courses.component";
import SelectSlot from "../select-slot/select-slot.component";
import SelectTeacher from "../select-teacher/select-teacher.component";

import "./dropdown-group.styles.scss";

const DropdownGroup = ({
  allCourses,
  handleCourseCodeChange,
  handleTeacherChange,
  handleSlotChange,
  courseCode,
  empName,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSlotDisabled, setIsSlotDisabled] = useState(true);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [slotsForTeacher, setSlotsForTeacher] = useState([]);

  const courseCodeHandler = (event) => {
    if (event) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    handleCourseCodeChange(event);
  };

  const teacherHandler = (event) => {
    if (event) {
      setIsSlotDisabled(false);
    } else {
      setIsSlotDisabled(false);
    }
    handleTeacherChange(event);
  };

  useEffect(() => {
    if (courseCode.length > 1) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}view-teachers`, {
          courseCode: courseCode,
        })
        .then((response) => {
          setFilteredTeachers(response.data.data.teachers);
        });
    }
  }, [courseCode, isDisabled]);

  useEffect(() => {
    let temp = []
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}view-slots`, {
        courseCode: courseCode,
        empName: empName,
      })
      .then((response) => {
        temp = response.data.data.slots;
        let slots = temp.map((slot) => {
          return {
            value: slot,
            label: slot,
          };
        });
        setSlotsForTeacher(slots);
      });
  
      
  }, [isSlotDisabled, courseCode, empName]);


  return (
    <div className="subject">
      <SelectCourses
        allCourses={allCourses}
        onCourseCodeChangeHandler={(event) => courseCodeHandler(event)}
      />

      <SelectTeacher
        allTeachers={filteredTeachers}
        onTeacherChangeHandler={(event) => teacherHandler(event)}
        isDisabled={isDisabled}
      />

      <SelectSlot
        slots={slotsForTeacher}
        onSlotChangeHandler={(event) => handleSlotChange(event)}
        isDisabled={isSlotDisabled}
      />
    </div>
  );
};

export default DropdownGroup;
