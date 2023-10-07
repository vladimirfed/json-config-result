import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Date = ({ input_label, input_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3">
      <label className="form-label">{input_label}</label>
      <input
        type="date"
        className="form-control"
        value={input_value}
        onChange={(event) => handleChange(input_label, event)}
      />
    </div>
  );
};

export default Date;
