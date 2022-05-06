import Element from "./Element";

function Result({ fields, page_title, handleSubmit }) {
  return (
    <div className="App container">
      <h2>Result</h2>
      <h3>{page_title}</h3>
      <form>
        {fields
          ? fields.map((field, i) => <Element key={i} field={field} />)
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
