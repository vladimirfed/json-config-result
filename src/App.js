import { useState } from "react";
import Result from "./components/Result";
import Config from "./components/Config";
import { FormContext } from "./FormContext";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState(null);

  const addTodo = (todoInput) => {
    let res = JSON.parse(todoInput);
    setItems(res);
  };

  const { inputs, page_title } = items ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };

  const handleChange = (label, e) => {
    const newitems = { ...items };
    newitems.inputs.forEach((input) => {
      const { input_type, input_label } = input;
      if (label === input_label) {
        switch (input_type) {
          case "checkbox":
            input["input_value"] = e.target.checked;
            break;
          default:
            input["input_value"] = e.target.value;
            break;
        }
      }
      setItems(newitems);
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <header className="App container">
        <Link to="/config">
          <button className="btn btn-primary">Config</button>
        </Link>
        <Link to="/result">
          <button className="btn btn-primary">Result</button>
        </Link>
      </header>
      <Routes>
        <Route path="/config" element={<Config addTodo={addTodo} />} />
        <Route
          path="/result"
          element={
            <Result
              inputs={inputs}
              page_title={page_title}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
    </FormContext.Provider>
  );
}

export default App;
