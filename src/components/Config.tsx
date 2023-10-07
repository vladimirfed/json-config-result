import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

function Config({ configToForm }) {
  const navigate = useNavigate();
  const [jsonConfig, setJsonConfig] = useState("");

  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue() {
    if (isJson(editorRef.current.getValue())) {
      configToForm(editorRef.current.getValue());
      setJsonConfig(editorRef.current.setValue(""));
      navigate("/result");
    } else {
      alert("Please add JSON config");
    }
  }

  function isJson(value) {
    try {
      JSON.parse(value);
    } catch (error) {
      return false;
    }
    return true;
  }

  return (
    <div className="App container">
      <h2 style={{ margin: 5 }}>Config</h2>
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        // defaultValue="// some comment"
        value={jsonConfig}
        onMount={handleEditorDidMount}
      />
      <button
        style={{ margin: 5 }}
        className="btn btn-primary"
        aria-label="outlined button group"
        onClick={showValue}
      >
        Show value
      </button>
    </div>
  );
}

export default Config;
