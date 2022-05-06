import { useState } from "react";

function Config({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  };

  const resetInput = (e) => {
    e.preventDefault();
    setTodoInput("");
  };

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="App container">
      <h2>Config</h2>
      <textarea
        className="form-control"
        rows="10"
        value={todoInput}
        aria-label="maximum height"
        placeholder="PlaceHolder"
        // defaultValue="Lorem ipsum dolor."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div>
        <button 
          className="btn btn-primary"
          onClick={handleSubmit}
          variant="outlined"
          aria-label="outlined button group"
        >
          Apply
        </button>
        <button
          className="btn btn-primary"
          onClick={resetInput}
          variant="outlined"
          aria-label="outlined button group"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Config;
