import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Select = ({ field_id, field_label, field_options }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <>
      <label className="form-label">{field_label}</label>
      <select
        className="form-select"
        onChange={(event) => handleChange(field_id, event)}
      >
        <option>{field_label}</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
      </select>
    </>
  );
};

export default Select;
