import Card from "../card/card.component";
import "./card-list.styles.scss";

const CardList = ({ teachers, onFeedbackChange }) => {
  return (
    <div className="card-list">
      {teachers.map((teacher) => {
        return (
          <Card
            teacher={teacher}
            key={teacher._id}
            onFeedbackChange={onFeedbackChange}
          />
        );
      })}
    </div>
  );
};

export default CardList;
