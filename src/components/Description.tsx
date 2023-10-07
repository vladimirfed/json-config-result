function Description() {
  return (
    <div className="App container">
      <h1>Create Dynamic Forms from JSON</h1>
      <p>
        This app lets you create dynamic forms from JSON. You can use
        this app to design and customize your own forms without writing any
        code.
      </p>
      <p>
        In the <strong>Config</strong> section, you can enter a JSON template
        that defines the structure and properties of your form. You can use
        various types of form elements, such as text, number, date, checkbox,
        radio, select, and more. You can also specify
        labels, placeholders, and options for each element.
      </p>
      <p>
        In the <strong>Result</strong> section, you can see the dynamically
        created form based on your JSON template. You can fill out the form and
        submit it to see the output data in <code>console</code>. You can also edit the JSON template
        and see the changes in the form instantly.
      </p>
      <p>
        You can find a JSON template example in <code>formElement.json</code>.
        You can also load some predefined templates from the dropdown menu or
        upload your own JSON file.
      </p>
      <p>
        This app is built with React, a progressive framework for building user
        interfaces. React makes it easy to create reactive components that update
        automatically when the data changes.
      </p>
    </div>
  );
}

export default Description;
