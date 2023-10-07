import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Number = ({ input_label, input_placeholder, input_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        {input_label}
      </label>
      <input
        type="number"
        pattern="[0-9]+"
        className="form-control"
        placeholder={input_placeholder ? input_placeholder : ""}
        value={input_value}
        onChange={(event) => handleChange(input_label, event)}
      />
    </div>
  );
};

export default Number;
