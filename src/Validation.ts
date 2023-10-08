import { JsonConfig, InputElement } from "./Interfaces";

export function isJsonConfig(value: any): value is JsonConfig {
    const config = JSON.parse(value);
    return (
      "page_title" in config &&
      "inputs" in config &&
      isInputElement(config.inputs)
    );
}

function isInputElement(inputs: any[]): inputs is InputElement[] {
  return (
    inputs.filter((el) => "input_type" in el && "input_value" in el).length ===
    inputs.length
  );
}

export function isJson(value: string): boolean {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }
  return true;
}