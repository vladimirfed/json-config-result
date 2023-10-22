import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { isJsonConfig } from "../Validation";

const defultValue = "";

function Config({ configToForm }) {
  const navigate = useNavigate();
  const [jsonConfig, setJsonConfig] = useState<string>(defultValue);

  const editorRef = useRef(null);

  useEffect(() => {
    setJsonConfig(localStorage.getItem("jsonConfig") || defultValue);
  }, []);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function showValue(): void {
    if (!isJsonConfig(jsonConfig)) {
      alert("Please add valid JSON config");
      return;
    }
  
    localStorage.setItem("jsonConfig", jsonConfig);
    configToForm(JSON.parse(jsonConfig));
    navigate("/result");
  }

  return (
    <div className="App container">
      <h2 style={{ margin: 5 }}>Config</h2>
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        value={jsonConfig}
        onChange={setJsonConfig}
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
