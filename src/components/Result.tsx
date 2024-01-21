import { InputElement } from "../Interfaces";
import Element from "./Element";

type Props = { inputs: InputElement[]; page_title: any; handleSubmit};

function Result({ inputs, page_title, handleSubmit }: Props): JSX.Element {
  return (
    <div className="App container">
      <h3>{page_title}</h3>
      <form>
        {Object.keys(inputs).length ? (
          inputs.map((input: InputElement, i: number) => (
            <Element {...input} key={i} />
          ))
        ) : (
          <span>Please enter a JSON in the Config section first</span>
        )}
        <br />
        <button
          style={{ marginBottom: 10 }}
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
