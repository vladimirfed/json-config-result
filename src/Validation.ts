import { JsonConfig, InputElement } from "./Interfaces";

export function isJsonConfig(value: any): value is JsonConfig {
  try {
    const config = JSON.parse(value);
    if (
      "page_title" in config &&
      "inputs" in config &&
      isInputElement(config.inputs)
    ) {
      return true;
    }
  } catch (error) {
    alert("Your Config is not in JSON format. Error parsing JSON config: " + error);
  }

  return false;
}

function isInputElement(inputs: any[]): inputs is InputElement[] {
  return inputs.every((el) => "input_type" in el && "input_value" in el);
}

export function isJson(value: string): boolean {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }
  return true;
}