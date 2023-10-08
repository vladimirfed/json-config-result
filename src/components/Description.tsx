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
      
      <p>
        This app lets you create dynamic forms from JSON. You can use this app
        to design and customize your own forms without writing any code.
      </p>

      <p>
        In the <strong>Config</strong> section, you can enter a JSON template
        that defines the structure and properties of your form. You can use
        various types of form elements, such as text, number, date, checkbox,
        radio, select, and more. You can also specify labels, placeholders, and
        options for each element.
      </p>

      <strong>Requirements:</strong>
      <ul>
        <li>Json properties should be doublequoted</li>
        <li>
          Json has to be following format: <code>{jsonFormat}</code>
        </li>
        <li>
          You can find a JSON template example in <code>formElement.json</code>.
        </li>
      </ul>

      <p>
        In the <strong>Result</strong> section, you can see the dynamically
        created form based on your JSON template. You can fill out the form and
        submit it to see the output data in <code>console</code>. You can also
        edit the JSON template and see the changes in the form instantly.
      </p>
    </div>
  );
}

export default Description;
