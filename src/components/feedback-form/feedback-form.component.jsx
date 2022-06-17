import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
require("./feedback-form.styles.scss");

const FeedbackForm = ({ rating, onSubmitHandler, feedback }) => {
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
        <label htmlFor="r1" className="ra1">
          <input
            type="radio"
            name="rating"
            className="ra1"
            id="ra1"
            value="ra1"
          />
          <FontAwesomeIcon icon={fa1} className="f fa1" />
        </label>
        <label htmlFor="r2" className="ra2">
          <input
            type="radio"
            name="rating"
            className="ra2"
            id="ra2"
            value="ra2"
          />
          <FontAwesomeIcon icon={fa2} className="f fa2" />
        </label>
        <label htmlFor="r3" className="ra3">
          <input
            type="radio"
            name="rating"
            className="ra3"
            id="ra3"
            value="ra3"
          />
          <FontAwesomeIcon icon={fa3} className="f fa3" />
        </label>
        <label htmlFor="r4" className="ra4">
          <input
            type="radio"
            name="rating"
            className="ra4"
            id="ra4"
            value="ra4"
          />
          <FontAwesomeIcon icon={fa4} className="f fa4" />
        </label>
        <label htmlFor="r5" className="ra5">
          <input
            type="radio"
            name="rating"
            className="ra5"
            id="ra5"
            value="ra5"
          />
          <FontAwesomeIcon icon={fa5} className="f fa5" />
        </label>
      </fieldset>
      <div className="flexDiv">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FeedbackForm;
