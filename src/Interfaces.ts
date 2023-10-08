export interface JsonConfig {
  page_title: string;
  inputs: InputElement[];
}

export type InputElement =
  | TextInput
  | TextareaInput
  | NumberInput
  | SelectInput
  | DateInput
  | CheckboxInput
  | RadioInput;

export type InputType =
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
