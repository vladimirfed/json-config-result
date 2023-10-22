function Description() {
  const jsonFormat = `{
    "page_title": "Some Title",
    "inputs": [
      {
        "input_label": "Some label",
        "input_placeholder": "placeholder for text",
        'input_type': "text",
        "input_value": ""
      }
    ]
  }`;
  return (
    <div className="App container">
      <h1>Create Dynamic Forms from JSON</h1>

      {/* Introduction */}
      <p>
        This app allows you to create dynamic forms from JSON without writing any code. Customize your own forms easily.
      </p>

      {/* Config Section */}
      <p>
        In the <strong>Config</strong> section, enter a JSON template defining the form's structure and properties. You can use various form elements such as text, number, date, checkbox, radio, select, and more. Specify labels, placeholders, and options for each element.
      </p>

      <strong>Requirements:</strong>
      <ul>
        <li>JSON properties should be double-quoted.</li>
        <li>JSON format should match the following: <code>{jsonFormat}</code></li>
        <li>Refer to a JSON template example in <code>formElement.json</code>.</li>
      </ul>

      {/* Result Section */}
      <p>
        In the <strong>Result</strong> section, view the dynamically created form based on your JSON template. Fill out the form, submit it, and see the output data in the console. Edit the JSON template to see instant changes in the form.
      </p>
    </div>
  );
}

export default Description;
