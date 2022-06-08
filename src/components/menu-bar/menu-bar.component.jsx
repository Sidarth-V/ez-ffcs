import SearchBox from "../../components/search-box/search-box.component";
import Select from "react-select";
import "./menu-bar.styles.scss";

const customStyles = {
  control: (base) => ({
    ...base,
    height: 52,
    width: 200,
    minHeight: 35,
    border: "1px solid #e5e5e5",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #e5e5e5",
    },
  }),
};

const MenuBar = ({
  onSearchHandler,
  onCourseCodeChangeHandler,
  allCourses,
}) => {
  return (
    <div className="menu-bar-container">
      <Select
        options={allCourses}
        onChange={onCourseCodeChangeHandler}
        isClearable={true}
        isSearchable={true}
        defaultValue={""}
        styles={customStyles}
        placeholder={"course code"}
      />
      <SearchBox
        onChangeHandler={onSearchHandler}
        placeholder="search teachers"
      />
    </div>
  );
};

export default MenuBar;
