export interface JsonConfig {
  page_title: string;
  inputs: InputElement[];
}

type InputElement =
  | TextInput
  | TextareaInput
  | NumberInput
  | SelectInput
  | DateInput
  | CheckboxInput
  | RadioInput;

type InputType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "date"
  | "checkbox"
  | "radio";

interface TextInput {
  input_label?: string;
  input_placeholder?: string;
  input_type: "text";
  input_value: string;
}

interface TextareaInput {
  input_label?: string;
  input_placeholder?: string;
  input_type: "textarea";
  input_value: string;
}

interface NumberInput {
  input_label?: string;
  input_placeholder?: string;
  input_type: "number";
  input_value: string;
}

interface SelectInput {
  input_label?: string;
  input_type: "select";
  input_value: string;
  input_options: { option_label: string }[];
}

interface DateInput {
  input_label?: string;
  input_type: "date";
  input_value: string;
}

interface CheckboxInput {
  input_label?: string;
  input_type: "checkbox";
  input_value: boolean;
}

interface RadioInput {
  input_label?: string;
  input_options: { option_label: string }[];
  input_type: "radio";
  input_value: string;
}

export function isJsonConfig(value: any): value is JsonConfig {
  if (isJson(value)) {
    const config = JSON.parse(value);
    return (
      "page_title" in config &&
      "inputs" in config &&
      isInputElement(config.inputs)
    );
  }
  return false;
}

function isInputElement(inputs: any[]): inputs is InputElement[] {
  return (
    inputs.filter((el) => "input_type" in el && "input_value" in el).length ===
    inputs.length
  );
}

function isJson(value: string): boolean {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }
  return true;
}
