import React, { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ input_label, input_placeholder, input_value }) => {
  const { handleChange } = useContext(FormContext);

  let id = Math.random();

  return (
    <div className="mb-3">
      <label className="form-label">{input_label}</label>
      <input
        id={id}
        type="text"
        className="form-control"
        placeholder={input_placeholder ? input_placeholder : ""}
        value={input_value}
        onChange={(event) => handleChange(input_label, event)}
      />
    </div>
  );
};

export default Input;
