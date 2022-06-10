import { useState } from "react";
import SelectCourses from "../select-courses/select-courses.component";

const MakeTableForm = ({ allCourses }) => {
  const [formValues, setFormValues] = useState([""]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    if (e) {
      newFormValues[i] = e.value;
      setFormValues(newFormValues);
    } else {
      removeFormFields(i);
    }
    console.log(e);
  };

  let addFormFields = () => {
    setFormValues([...formValues, ""]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    if (newFormValues.length === 0) newFormValues = [""];
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <button
        className="button add"
        type="button"
        onClick={() => addFormFields()}
      >
        Add
      </button>
      <form onSubmit={handleSubmit}>
        {formValues.map((element, index) => (
          <div className="form-inline" key={index}>
            <SelectCourses
              allCourses={allCourses}
              onCourseCodeChangeHandler={(event) => handleChange(index, event)}
            />
            {index ? (
              <button
                type="button"
                className="button remove"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        ))}
        <div className="button-section">
          <button className="button submit" type="submit">
            Make Timetables
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeTableForm;
