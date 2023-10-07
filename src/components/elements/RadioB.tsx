import { useContext } from "react";
import { FormContext } from "../../FormContext";

const RadioB = ({ input_label, input_value, input_options }) => {
  const { handleChange } = useContext(FormContext);

  return (
    <div>
      <label className="form-check-label">{input_label}</label>
      {input_options.length > 0 &&
        input_options.map((option, i) => {
          return (
            <div className="form-check" key={i}>
              <input
                value={option.option_label}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={(event) => handleChange(input_label, event)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {option.option_label}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default RadioB;
