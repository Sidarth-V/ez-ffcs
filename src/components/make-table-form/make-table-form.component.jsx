import { useState } from "react";
import SubmitButton from "../submit-button/submit-button.component";
import DropdownGroup from "../dropdown-group/dropdown-group.component";
import "./make-table-form.styles.scss";

const MakeTableForm = ({ allCourses, allTeachers, makeTimetablesHandler }) => {
  const [formValues, setFormValues] = useState([
    [
      { courseCode: "", teacher: "" },
      { courseCode: "", teacher: "" },
    ],
    [
      { courseCode: "", teacher: "" },
      { courseCode: "", teacher: "" },
    ],
    [
      { courseCode: "", teacher: "" },
      { courseCode: "", teacher: "" },
    ],
    [
      { courseCode: "", teacher: "" },
      { courseCode: "", teacher: "" },
    ],
  ]);

  const handleCourseCodeChange = (e, i, j) => {
    let newFormValues = [...formValues];
    if (e) {
      newFormValues[i][j].courseCode = e.value;
      setFormValues(newFormValues);
    } else {
      newFormValues[i][j].courseCode = "";
      newFormValues[i][j].teacher = "";
      setFormValues(newFormValues);
    }
  };

  const handleTeacherChange = (e, i, j) => {
    let newFormValues = [...formValues];
    if (e) {
      newFormValues[i][j].teacher = e.value;
      setFormValues(newFormValues);
    } else {
      newFormValues[i][j].teacher = "";
      setFormValues(newFormValues);
    }
  };

  const filteredCourses = allCourses.filter((course) => {
    let allCoursesTaken = [];

    formValues.forEach((row) => {
      row.forEach((element) => {
        if (element.courseCode) allCoursesTaken.push(element.courseCode);
      });
    });

    return !allCoursesTaken.includes(course.value);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let courses = [];

    formValues.forEach((row) => {
      row.forEach((element) => {
        if (element.courseCode) courses.push(element);
      });
    });
    makeTimetablesHandler(courses);
    //alert(JSON.stringify(courses));
  };

  return (
    <form onSubmit={handleSubmit}>
      <SubmitButton />
      <table>
        <tbody>
          {formValues.map((row, i) => {
            return (
              <tr key={`${i}`}>
                {row.map((element, j) => {
                  return (
                    <td key={`${i}${j}`}>
                      <DropdownGroup
                        allCourses={filteredCourses}
                        allTeachers={allTeachers}
                        handleCourseCodeChange={(event) =>
                          handleCourseCodeChange(event, i, j)
                        }
                        handleTeacherChange={(event) =>
                          handleTeacherChange(event, i, j)
                        }
                        courseCode={element.courseCode}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
};

export default MakeTableForm;
