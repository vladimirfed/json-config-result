import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const RadioB = ({ field_id, field_label, field_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3 form-check">
      <input
        type="radio"
        className="form-check-input"
        checked={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
      <label className="form-check-label">{field_label}</label>
    </div>
  );
};

export default RadioB;
