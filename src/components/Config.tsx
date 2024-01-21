import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { isJsonConfig } from "../Validation";
import { Pages } from "../App";

const defultValue = "";

function Config({ configToForm, handleSectionChange }): JSX.Element {
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
    if (!isJsonConfig(jsonConfig)) return;

    localStorage.setItem("jsonConfig", jsonConfig);
    configToForm(JSON.parse(jsonConfig));
    handleSectionChange(Pages.Result);
    navigate("/result");
  }

  return (
    <div className="App container">
      <Editor
        height="80vh"
        defaultLanguage="javascript"
        value={jsonConfig}
        onChange={(string: string) => setJsonConfig(string)}
        onMount={handleEditorDidMount}
      />
      <button
        style={{ marginTop: 10 }}
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
