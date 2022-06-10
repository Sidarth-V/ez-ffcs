import SearchBox from "../../components/search-box/search-box.component";
import SelectCourses from "../select-courses/select-courses.component";
import "./menu-bar.styles.scss";

const MenuBar = ({
  onSearchHandler,
  onCourseCodeChangeHandler,
  allCourses,
}) => {
  return (
    <div className="menu-bar-container">
      <SelectCourses
        allCourses={allCourses}
        onCourseCodeChangeHandler={onCourseCodeChangeHandler}
      />
      <SearchBox
        onChangeHandler={onSearchHandler}
        placeholder="search teachers"
      />
    </div>
  );
};

export default MenuBar;
