import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

import Editor from "@monaco-editor/react";

function Config({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    addTodo(editorRef.current.getValue());
    setTodoInput("");
  }

  const handleSubmit = (e) => {
    if (typeof JSON.parse(todoInput) === "object") {
      e.preventDefault();
      addTodo(todoInput);
      setTodoInput("");
    } else {
      alert("error");
    }
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
      <h2 style={{ margin: 5 }}>Config</h2>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
      <button
        style={{ margin: 5 }}
        className="btn btn-primary"
        variant="outlined"
        aria-label="outlined button group"
        onClick={showValue}
      >
        Show value
      </button>
    </div>


  );
}

export default Config;
