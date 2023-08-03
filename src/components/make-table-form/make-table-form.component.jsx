import { useEffect, useState } from "react";
import SubmitButton from "../submit-button/submit-button.component";
import DropdownGroup from "../dropdown-group/dropdown-group.component";
import "./make-table-form.styles.scss";

const MakeTableForm = ({ allCourses, makeTimetablesHandler }) => {
  const [formValues, setFormValues] = useState([
    [
      { courseCode: "", teacher: "", slot: "" },
      { courseCode: "", teacher: "", slot: "" },
    ],
    [
      { courseCode: "", teacher: "", slot: "" },
      { courseCode: "", teacher: "", slot: "" },
    ],
    [
      { courseCode: "", teacher: "", slot: "" },
      { courseCode: "", teacher: "", slot: "" },
    ]
  ]);
  const [courseOptions, setCourseOptions] = useState([]);

  useEffect(() => {
    let options = allCourses.map((course) => {
      return {
        value: course.courseCode,
        label: `${course.courseCode} - ${course.courseTitle}`,
      };
    });
    setCourseOptions(options);
  }, [allCourses]);

  const handleCourseCodeChange = (e, i, j) => {
    let newFormValues = [...formValues];
    if (e) {
      newFormValues[i][j].courseCode = e.value;
    } else {
      newFormValues[i][j].courseCode = "";
      newFormValues[i][j].teacher = "";
    }
    setFormValues(newFormValues);
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

  const handleSlotChange = (e, i, j) => {
    let newFormValues = [...formValues];
    if (e) {
      newFormValues[i][j].slot = e.value;
      setFormValues(newFormValues);
    } else {
      newFormValues[i][j].slot = "";
      setFormValues(newFormValues);
    }
  };

  const filteredCourses = courseOptions.filter((course) => {
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
    // makeTimetablesHandler(courses);
    alert(JSON.stringify(courses));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="header-container">
        <SubmitButton />
      </div>
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
                        handleCourseCodeChange={(event) =>
                          handleCourseCodeChange(event, i, j)
                        }
                        handleTeacherChange={(event) =>
                          handleTeacherChange(event, i, j)
                        }
                        handleSlotChange={(event) =>
                          handleSlotChange(event, i, j)
                        }
                        courseCode={element.courseCode}
                        empName={element.teacher}
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
