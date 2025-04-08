const DropDown = ({ options, selectedValue, handleChange }) => {
  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
