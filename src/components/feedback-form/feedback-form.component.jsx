import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import RatingNumber from "../rating/rating.component";
require("./feedback-form.styles.scss");

const FeedbackForm = ({ rating, onSubmitHandler, feedback }) => {
  const [rate, setRate] = useState(rating);
  const handleChange = (e)=>{
    setRate(parseInt(e.target.value));
  }
  const num=[1,2,3,4,5];
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
        {num.map(i => (
             <RatingNumber
             newRating={rate}
             val={i}
             labelClass={"ra"+i}
             faIcon={fas[i-1]}
             faClass={"f fa"+i}
             func={handleChange}
           />
        ))
        }
        {/* <RatingNumber
          newRating={rate}
          val={1}
          labelClass="ra1"
          faIcon={fa1}
          faClass="f fa1"
          func={handleChange}
        />
        <label htmlFor="r2" className="ra2">
          <input type="radio" name="rating" className="ra2" id="ra2" value={2}
          checked={rate===2} onClick={handleChange}/>
          <FontAwesomeIcon icon={fa2} className="f fa2"/>
        </label>
        <label htmlFor="r3" className="ra3">
          <input type="radio" name="rating" className="ra3" id="ra3" value={3}
          checked={rate===3} onClick={handleChange}/>
          <FontAwesomeIcon icon={fa3} className="f fa3"/>
        </label>
        <label htmlFor="r4" className="ra4">
          <input type="radio" name="rating" className="ra4" id="ra4" value={4}
          checked={rate===4} onClick={handleChange}/>
          <FontAwesomeIcon icon={fa4} className="f fa4"/>
        </label>
        <label htmlFor="r5" className="ra5">
          <input type="radio" name="rating" className="ra5" id="ra5" value={5}
          checked={rate===5} onClick={handleChange}/>
          <FontAwesomeIcon icon={fa5} className="f fa5"/>
        </label> */}
      </fieldset>
      <div className="flexDiv">
          <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default FeedbackForm;
