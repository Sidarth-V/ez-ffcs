import "./search-box.styles.scss";

const SearchBox = ({ onChangeHandler, placeholder }) => {
  return (
    <input
      className={`search-box`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
