import Element from "./Element";

function Result({ inputs, page_title, handleSubmit }) {
  return (
    <div className="App container">
      <h3>{page_title}</h3>
      <form>
        {Object.keys(inputs).length
          ? inputs.map((input, i) => <Element key={i} input={input} />)
          : <span>Please enter a JSON in the Config section first</span>}
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
