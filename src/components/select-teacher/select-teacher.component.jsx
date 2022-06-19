import Select from "react-select";

const SelectTeacher = ({ allTeachers, onTeacherChangeHandler, isDisabled }) => {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 52,
      width: 200,
      background: "rgb(15, 17, 22)",
      color: "white",
      boxShadow: "none",
      border: "1px solid rgb(49, 54, 60)",
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
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
  };
  return (
    <Select
      options={allTeachers}
      onChange={onTeacherChangeHandler}
      isClearable={true}
      isSearchable={true}
      styles={customStyles}
      placeholder={"select teacher ;)"}
      isDisabled={isDisabled}
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

export default SelectTeacher;
