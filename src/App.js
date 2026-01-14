import "./index.css";
import { useState } from "react";

function App() {
  const [listOfNumbers, setListOfNumbers] = useState([1, 2, 3, 4, 5]);

  const doubleAll = () => {
    let itemDoubled = listOfNumbers.map((item) => {
      return item * 2;
    });

    setListOfNumbers(itemDoubled);
  };

  const removeEven = () => {
    let filteredNumbers = listOfNumbers.filter((num) => num % 2 !== 0);
    setListOfNumbers(filteredNumbers);
  };

  const addrandom = () => {
    // let randomListOfNumbers = [];

    // for (let index = 0; index < listOfNumbers.length; index++) {
    //   let randomNumber = Math.floor(Math.random() * 10);

    //   randomListOfNumbers.push(randomNumber);
    // }

    // setListOfNumbers(randomListOfNumbers);

    let randomNumber = Math.floor(Math.random() * 10) + 1;
    setListOfNumbers((listOfNumbers) => [randomNumber, ...listOfNumbers]);
  };

  const removeFirst = () => {
    const [, ...newListOfNumbers] = listOfNumbers;
    setListOfNumbers(newListOfNumbers);
  };

  const reverse = () => {
    setListOfNumbers((listOfNumbers) => [...listOfNumbers].reverse());
  };

  return (
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
