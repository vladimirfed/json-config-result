import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Textarea = ({
  field_id,
  field_label,
  field_placeholder,
  field_value
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label>{field_label}</label>
      <textarea
        type="textarea"
        className="form-control"
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        onChange={(event) => handleChange(field_id, event)}
      />
    </div>
  );
};

export default Textarea;
