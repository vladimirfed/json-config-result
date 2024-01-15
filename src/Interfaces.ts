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

export const enum InputType {
  Text = "text",
  Textarea = "textarea",
  Number = "number",
  Select = "select",
  Date = "date",
  Checkbox = "checkbox",
  Radio = "radio",
}

export interface BaseInput {
  input_label?: string;
  input_value: string;
  input_type: InputType;
}

interface TextInput extends BaseInput {
  input_type: InputType.Text;
  input_placeholder?: string;
}

export interface TextareaInput extends BaseInput {
  input_placeholder?: string;
  input_type: InputType.Textarea;
}

export interface NumberInput extends BaseInput {
  input_placeholder?: string;
  input_type: InputType.Number;
}

interface SelectInput extends BaseInput {
  input_type: InputType.Select;
  input_options: { option_label: string }[];
}

interface DateInput extends BaseInput {
  input_type: InputType.Date;
}

interface CheckboxInput extends BaseInput {
  input_type: InputType.Checkbox;
}

interface RadioInput extends BaseInput {
  input_options: { option_label: string }[];
  input_type: InputType.Radio;
}
