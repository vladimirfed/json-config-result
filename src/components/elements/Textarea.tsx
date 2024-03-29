import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Textarea = ({ input_label, input_placeholder, input_value }): JSX.Element => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label>{input_label}</label>
      <textarea
        className="form-control"
        placeholder={input_placeholder ? input_placeholder : ""}
        value={input_value}
        onChange={(event) => handleChange(input_label, event)}
      />
    </div>
  );
};

export default Textarea;
