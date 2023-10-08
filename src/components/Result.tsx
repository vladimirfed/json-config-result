import { InputElement } from "../Interfaces";
import Element from "./Element";

function Result({ inputs, page_title, handleSubmit }) {
  return (
    <div className="App container">
      <h2>Result</h2>
      <h3>{page_title}</h3>
      <form>
        {inputs
          ? inputs.map((input, i) => <Element key={i} input={input} />)
          : null}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Result;
