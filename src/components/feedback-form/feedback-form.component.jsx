const FeedbackForm = ({ rating, onSubmitHandler, feedback }) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <label>Feedback: </label>
      <textarea
        placeholder="feedback goes here"
        name="feedback"
        defaultValue={feedback}
      />
      <br />
      <label>Rating: </label>
      <input
        type="number"
        placeholder="rating"
        name="rating"
        defaultValue={rating}
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default FeedbackForm;
