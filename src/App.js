import "./index.css";
import { useState } from "react";

function App() {
  const [listOfNumbers, setListOfNumnbers] = useState([1, 2, 3, 4, 5]);

  const doubleAll = () => {};
  const removeEven = () => {};
  const addrandom = () => {};
  const removeFirst = () => {};
  const reverse = () => {};

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="listContainer">
          {listOfNumbers.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
        <div className="buttonContainer">
          <button>Double All</button>
          <button>Remove Even</button>
          <button>Add Random</button>
          <button>Remove First</button>
          <button>Reverse</button>
        </div>
      </div>
    </div>
  );
}

export default App;
