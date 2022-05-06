import { useState } from "react";
import Result from "./components/Result";
import Config from "./components/Config";
import { FormContext } from "./FormContext";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState(null);
  const [res, setRes] = useState(null);

  const addTodo = (todoInput) => {
    let res = eval("(" + todoInput + ")"); //  need to refactor
    setItems(res);
  };

  const { fields, page_title } = items ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
    setRes(items.fields);
    // console.log(res)
  };

  const handleChange = (id, e) => {
    const newitems = { ...items };
    newitems.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox" || "radio":
            field["field_value"] = e.target.checked;
            break;
          default:
            field["field_value"] = e.target.value;
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
              fields={fields}
              page_title={page_title}
              handleSubmit={handleSubmit}
            />
          }
        />
      </Routes>
      <div className="App container">
        {res !== null
          ? res.map((e) => <div key={e.field_id}>{e.field_value}</div>)
          : null}
      </div>
    </FormContext.Provider>
  );
}

export default App;

// отобразить результат ввода  - логика готова

// валидировать текстарию

// избавиться от евал

// сделать UI - +-поправил накинув бутстрап

// реструктурировать файлы  - добавил нужные

// видоизменить
