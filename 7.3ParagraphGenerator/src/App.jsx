import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const[length, setLength] = useState("")

  const handleClick = () => { 
    console.log(typeof value)

    if (value === "") {
      alert("please enter a number")
      return
    }
    console.log("I am here")
   setLength((value))
  }

  return (
    <>
      <div className="mainDiv">
        <h1>Para Generator</h1>
        <div className="inputDiv">
          <input
            type="text"
            value={value}
            placeholder="Enter the length of the paragraph"
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleClick}>Generate</button>
        </div>
        <div>
          <p>
           
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
