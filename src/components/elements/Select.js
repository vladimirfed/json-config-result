import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Select = ({ input_label, input_options }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <>
      <label className="form-label">{input_label}</label>
      <select
        className="form-select"
        onChange={(event) => handleChange(input_label, event)}
      >
        <option>{input_label}</option>
        {input_options.length > 0 &&
          input_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
