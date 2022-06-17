import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RatingNumber from "../rating/rating.component";
require("./feedback-form.styles.scss");

const FeedbackForm = ({ rating, onSubmitHandler, feedback }) => {
  const [rate, setRate] = useState(rating);
  const handleChange = (e) => {
    setRate(parseInt(e.target.value));
  };
  const num = [1, 2, 3, 4, 5];
  const fas = [fa1, fa2, fa3, fa4, fa5];
  return (
    <form onSubmit={onSubmitHandler} className="fb-form">
      <fieldset>
        <legend>Feedback</legend>
        <textarea
          rows={5}
          placeholder="feedback goes here"
          name="feedback"
          defaultValue={feedback}
        />
      </fieldset>
      <fieldset className="rating">
        <legend>Rating: </legend>
        {num.map((i) => (
          <RatingNumber
            newRating={rate}
            val={i}
            labelClass={`ra${i}`}
            faIcon={fas[i - 1]}
            faClass={`f fa${i}`}
            func={handleChange}
          />
        ))}
      </fieldset>
      <div className="flexDiv">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FeedbackForm;
