import SelectCourses from "../select-courses/select-courses.component";
import SubmitButton from "../submit-button/submit-button.component";
import "./make-table-form.styles.scss";

const MakeTableForm = ({ allCourses, allTeachers }) => {
  // const [formValues, setFormValues] = useState([""]);

  let handleChange = (e) => {
    // let newFormValues = [...formValues];
    // if (e) {
    //   newFormValues[i] = e.value;
    //   setFormValues(newFormValues);
    // } else {
    //   let newFormValues = [...formValues];
    //   newFormValues.splice(i, 1);
    //   if (newFormValues.length === 0) newFormValues = [""];
    //   setFormValues(newFormValues);
    // }
    console.log(e);
  };

  const filteredTeachers = allTeachers.map((teacher) => {
    return { value: teacher.empName, label: teacher.empName };
  });

  let handleSubmit = (event) => {
    event.preventDefault();
    alert("submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SubmitButton />
      <div className="subject">
        <SelectCourses
          allCourses={allCourses}
          onCourseCodeChangeHandler={(event) => handleChange(event)}
        />

        <SelectCourses
          allCourses={filteredTeachers}
          onCourseCodeChangeHandler={(event) => handleChange(event)}
        />
      </div>
    </form>
  );
};

export default MakeTableForm;
