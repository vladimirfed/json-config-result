import { JsonConfig, InputElement } from "./Interfaces";

export function isJsonConfig(value: any): value is JsonConfig {
  try {
    const config = JSON.parse(value);
    if (!hasTitleAndInputs(config)) return false
    const { inputs } = config;
    for (const input of inputs) {
      if (!checkInput(input)) return false;
    }
    return true;
  } catch (error) {
    alert("Your Config is not in JSON format. Error parsing JSON config: " + error);
  }
  return false;
}

function hasTitleAndInputs(config: JsonConfig) {
  if (!("page_title" in config) || !("inputs" in config)) {
    const missingFields = [];
    if (!("page_title" in config)) missingFields.push("page_title");
    if (!("inputs" in config)) missingFields.push("inputs");
    alert(`Invalid input format: Missing ${missingFields.join(", ")}`);
    return false;
  }
  return true;
}

function checkInput(input: InputElement) {
  const requiredProperties = ["input_label", "input_type", "input_value"];
  if (requiredProperties.every(prop => prop in input)) {
    if (input.input_type === "select" && !input.input_options) {
      alert(`Invalid input format: Missing 'input_options' for '${input.input_label}'`);
      return false;
    }
    if (input.input_type === "radio" && (!input.input_options || input.input_options.length < 2)) {
      alert(`Invalid input format: Missing 'input_options' or less than 2 options for '${input.input_label}'`);
      return false;
    }
  } else {
    const missingFields = requiredProperties.filter(prop => !(prop in input));
    alert(`Invalid input format: Missing ${missingFields.join(", ")} for input`);
    return false;
  }
  return true;
}

export function isJson(value: string): boolean {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }
  return true;
}