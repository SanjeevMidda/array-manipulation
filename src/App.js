import "./index.css";
import { useState } from "react";

function App() {
  const [listOfNumbers, setListOfNumnbers] = useState([1, 2, 3, 4, 5]);

  const doubleAll = () => {
    console.log("working");
  };
  const removeEven = () => {
    console.log("working");
  };
  const addrandom = () => {
    console.log("working");
  };
  const removeFirst = () => {
    console.log("working");
  };
  const reverse = () => {
    console.log("working");
  };

    <div className="App">
      <div className="mainContainer">
        <div className="listContainer">
          {listOfNumbers.map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
        </div>
        <div className="buttonContainer">
          <button onClick={() => doubleAll()}>Double All</button>
          <button onClick={() => removeEven()}>Remove Even</button>
          <button onClick={() => addrandom()}>Add Random</button>
          <button onClick={() => removeFirst()}>Remove First</button>
          <button onClick={() => reverse()}>Reverse</button>
        </div>
      </div>
    </div>
  );
}

export default App;
