import Select from "react-select";

const SelectCourses = ({ allCourses, onCourseCodeChangeHandler }) => {
  const customStyles = {
    control: (base, state, styles) => ({
      ...styles,
      color: "white",
      ...base,
      height: 52,
      width: 200,
      minHeight: 35,
      border: "1px solid rgb(49, 54, 60)",
      background: "rgb(15, 17, 22)",
      boxShadow: "none",
      borderColor: state.isFocused ? "none" : "none",
    }),
    option: (styles) => ({
      ...styles,
      backgroundColor: "rgb(15, 17, 22)",
      color: "white",
    }),
  };
  return (
    <Select
      options={allCourses}
      onChange={onCourseCodeChangeHandler}
      isClearable={true}
      isSearchable={true}
      defaultValue={""}
      styles={customStyles}
      placeholder={"course code"}
    />
  );
};

export default SelectCourses;
