import React from "react";

const MultiSelect = ({ options, selectedValues = [], handleChange }) => {
  const onChange = (event) => {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    handleChange(selected);
  };

  return (
    <div>
      <select
        multiple
        value={selectedValues}
        onChange={onChange}
        style={{ minWidth: "200px", height: "100px" }} // Optional: visible size
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelect;
