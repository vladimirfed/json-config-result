import { useState } from "react";
import Result from "./components/Result";
import Config from "./components/Config";
import { FormContext } from "./FormContext";
import { Routes, Route, Link } from "react-router-dom";
import Description from "./components/Description";

function App() {
  const [form, setForm] = useState(null);

  const configToForm = (JSONconfig) => {
    JSONconfig && setForm(JSON.parse(JSONconfig));
  };

  const { inputs, page_title } = form ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (label, e) => {
    const newitems = { ...form };
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
      setForm(newitems);
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <header className="App container">
        <Link to="/">
          <button style={{ margin: 5 }} className="btn btn-primary">
            Description
          </button>
        </Link>
        <Link to="/config">
          <button style={{ margin: 5 }} className="btn btn-primary">
            Config
          </button>
        </Link>
        <Link to="/result">
          <button style={{ margin: 5 }} className="btn btn-primary">
            Result
          </button>
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Description />} />
        <Route
          path="/config"
          element={<Config configToForm={configToForm} />}
        />
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
