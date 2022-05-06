import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ field_id, field_label, field_placeholder, field_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3">
      <label className="form-label">{field_label}</label>
      <input
        type="text"
        className="form-control"
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
      <div id="emailHelp" className="form-text">
        string.
      </div>
    </div>
  );
};

export default Input;
