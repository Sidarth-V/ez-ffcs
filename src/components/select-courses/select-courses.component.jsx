import Select from "react-select";

const SelectCourses = ({ allCourses, onCourseCodeChangeHandler }) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: "5vh",
      width: "17vw",
      fontSize: "0.7vmax",
      background: "rgb(15, 17, 22)",
      color: "white",
      boxShadow: "none",
      border: "0.5px solid rgb(49, 54, 60)",
      cursor: "pointer",
      ":hover": {
        boxShadow: "none",
        border: "1px solid rgb(49, 54, 60)",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgb(15, 17, 22)",
      color: "white",
    }),
    option: (styles) => ({
      ...styles,
      cursor: "pointer",
      fontSize: "0.7vmax",
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
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          neutral80: "white",
          primary25: "rgb(49, 54, 60)",
          primary: "orange",
        },
      })}
    />
  );
};

export default SelectCourses;
