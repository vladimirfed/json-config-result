import React from "react";
import Checkbox from "./elements/Checkbox";
import Input from "./elements/Input";
import Number from "./elements/Number";
import Textarea from "./elements/Textarea";
import Date from "./elements/Date";
import RadioB from "./elements/RadioB";
import Select from "./elements/Select";

const Element = ({
  field: {
    field_type,
    field_id,
    field_label,
    field_placeholder,
    field_value,
    field_options
  }
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
        />
      );
      case "number":
        return (
          <Number
            field_id={field_id}
            field_label={field_label}
            field_placeholder={field_placeholder}
            field_value={field_value}
          />
        );
        case "textarea":
            return (
              <Textarea
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
              />
            );
            case "date":
                return (
                  <Date
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                  />
                );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          field_id={field_id}
          field_label={field_label}
          field_value={field_value}
        />
      );
      case "radio":
        return (
          <RadioB
            field_id={field_id}
            field_label={field_label}
            field_value={field_value}
          />
        );

    default:
      return null;
  }
};

export default Element;


