import React from "react";
import Checkbox from "./elements/Checkbox";
import Input from "./elements/Input";
import Number from "./elements/Number";
import Textarea from "./elements/Textarea";
import Date from "./elements/Date";
import RadioB from "./elements/RadioB";
import Select from "./elements/Select";

const Element = ({
  input: {
    input_type,
    input_label,
    input_placeholder,
    input_value,
    input_options
  }
}) => {
  switch (input_type) {
    case "text":
      return (
        <Input
          input_label={input_label}
          input_placeholder={input_placeholder}
          input_value={input_value}
        />
      );
    case "number":
      return (
        <Number
          input_label={input_label}
          input_placeholder={input_placeholder}
          input_value={input_value}
        />
      );
    case "textarea":
      return (
        <Textarea
          input_label={input_label}
          input_placeholder={input_placeholder}
          input_value={input_value}
        />
      );
    case "date":
      return (
        <Date
          input_label={input_label}
          // input_placeholder={input_placeholder}
          input_value={input_value}
        />
      );
    case "select":
      return (
        <Select
          input_label={input_label}
          // input_placeholder={input_placeholder}
          // input_value={input_value}
          input_options={input_options}
        />
      );
    case "checkbox":
      return <Checkbox input_label={input_label} input_value={input_value} />;
    case "radio":
      return (
        <RadioB
          input_label={input_label}
          input_value={input_value}
          input_options={input_options}
        />
      );

    default:
      return null;
  }
};

export default Element;
