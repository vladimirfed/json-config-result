import { useState, MouseEvent } from "react";
import Result from "./components/Result";
import Config from "./components/Config";
import { FormContext } from "./FormContext";
import { Routes, Route, Link } from "react-router-dom";
import Description from "./components/Description";
import { InputElement, JsonConfig } from "./Interfaces";

export const enum Pages {
  Description = "description",
  Config = "config",
  Result = "result",
}

function App() {
  const [form, setForm] = useState<JsonConfig | null>(null);
  const [currentSection, setCurrentSection] = useState("description");

const handleSectionChange = (section: Pages): void => {
  setCurrentSection(section);
};

  const configToForm = (JSONconfig: JsonConfig): void => {
    setForm(JSONconfig);
  };

  const { inputs, page_title } = form || {
    inputs: {},
    page_title: '',
  };

  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    form && console.log(form);
  };

  const handleChange = (label, e: React.ChangeEvent<HTMLInputElement>): void => {
    const newitems = form && { ...form  };
    newitems?.inputs.forEach((input: InputElement) => {
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
    <header className="App container-fluid bg-primary text-white">
      <div className="d-flex justify-content-between">
        <Link to="/" onClick={() => handleSectionChange(Pages.Description)}>
          <button
            style={{ margin: 5 }}
            className={`btn ${currentSection === Pages.Description ? "btn-light" : "btn-primary"}`}
          >
            Description
          </button>
        </Link>
        <Link to="/config" onClick={() => handleSectionChange(Pages.Config)}>
          <button
            style={{ margin: 5 }}
            className={`btn ${currentSection === Pages.Config ? "btn-light" : "btn-primary"}`}
          >
            Config
          </button>
        </Link>
        <Link to="/result" onClick={() => handleSectionChange(Pages.Result)}>
          <button
            style={{ margin: 5 }}
            className={`btn ${currentSection === Pages.Result ? "btn-light" : "btn-primary"}`}
          >
            Result
          </button>
        </Link>
      </div>
    </header>
    <Routes>
        <Route path="/" element={<Description />} />
        <Route
          path="/config"
          element={<Config configToForm={configToForm} handleSectionChange={handleSectionChange} />}
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
