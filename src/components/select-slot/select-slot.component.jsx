import Select from "react-select";

const SelectSlot = ({ slots, onSlotChangeHandler, isDisabled }) => {
  
  const customStyles = {
    control: (base) => ({
      ...base,
      height: "5vh",
      width: "10vw",
      fontSize: "0.8vmax",
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
      fontSize: "0.8vmax",
    }),
  };
  return (
    <Select
      options={slots}
      onChange={onSlotChangeHandler}
      isClearable={true}
      isSearchable={true}
      styles={customStyles}
      placeholder={"select slot"}
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

export default SelectSlot;
