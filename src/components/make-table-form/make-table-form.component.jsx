import { useEffect, useState } from "react";
import SubmitButton from "../submit-button/submit-button.component";
import DropdownGroup from "../dropdown-group/dropdown-group.component";
import "./make-table-form.styles.scss";

const MakeTableForm = ({ allCourses, allTeachers, makeTimetablesHandler }) => {
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
    ],
    [
      { courseCode: "", teacher: "", slot: "" },
      { courseCode: "", teacher: "", slot: "" },
    ],
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
    console.log("here")
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

  const dynamicValues = () => {
    let credits = 0;
    let jComp = 0;
    let labComp = 0;
    let allCoursesTaken = [];

    formValues.forEach((row) => {
      row.forEach((element) => {
        if (element.courseCode) allCoursesTaken.push(element.courseCode);
      });
    });

    allCoursesTaken.forEach((courseCode) => {
      let objFound = allCourses.find(
        (course) => course.courseCode === courseCode
      );
      credits += objFound.creditCount;
      if (objFound.hasProject) jComp += 1;
      if (objFound.hasLab) labComp += 1;
    });
    return { credits, jComp, labComp };
  };

  let { credits, jComp, labComp } = dynamicValues();

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
      <div className="header-container">
        <div className="lab-project-container">
          <div className="credit-type">Lab</div>&nbsp;&nbsp;
          <div className="lab-counter-container">{labComp}</div> &nbsp;&nbsp;
          <div className="credit-type">Project</div>&nbsp;&nbsp;
          <div className="project-counter-container">{jComp}</div>
        </div>
        <SubmitButton />
        <div className="lab-project-container">
          <div className="credit-type">Total</div>
          <div className="credit-counter-container">{credits}</div>
        </div>
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
                        allTeachers={allTeachers}
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
