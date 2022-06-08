import Card from "../card/card.component";
import "./card-list.styles.scss";

const CardList = ({ teachers }) => {
  return (
    <div className="card-list">
      {teachers.map((teacher) => {
        return <Card teacher={teacher} key={teacher._id} />;
      })}
    </div>
  );
};

export default CardList;
