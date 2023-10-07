import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Checkbox = ({ input_label, input_value }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={input_value}
        onChange={(event) => handleChange(input_label, event)}
      />
      <label className="form-check-label" htmlFor="exampleCheck1">
        {input_label}
      </label>
    </div>
  );
};

export default Checkbox;
