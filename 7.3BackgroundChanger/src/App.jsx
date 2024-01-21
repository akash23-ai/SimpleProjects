import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className={`mainDiv `} style={{backgroundColor: color}}>
        <div className="container">
          <div className="red" onClick={() => setColor("red")}>
            Red
          </div>
          <div className="yellow" onClick={() => setColor("yellow")}>
            Yellow
          </div>
          <div className="black" onClick={() => setColor("black")}>
            Black
          </div>
          <div className="purple" onClick={() => setColor("purple")}>
            Purple
          </div>
          <div className="green" onClick={() => setColor("green")}>
            Green
          </div>
          <div className="blue" onClick={() => setColor("blue")}>
            Blue
          </div>
          <div className="default" onClick={() => setColor("red")}>
            Default
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
