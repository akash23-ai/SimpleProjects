import { useState } from "react";
import "./App.css";
import {loremIpsum} from "react-lorem-ipsum";

function App() {
  const [value, setValue] = useState("");
  const [paragraph, setParagraph] = useState("");

  // const paragraphGenerator = (length) => {
  //   let result = "";
  //   let characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let charactersLength = characters.length;
  //   for (let i = 0; i < length; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength));

  //   }

  //   console.log(result)
  //   return result;
  // }

  const handleClick = () => {
    setValue(parseInt(value));
    if (isNaN(value) || value === "") {
      alert("Please Type a Number");
      setValue("");
      return;
    }
    // const lorem = loremIpsum({count: value, units: "words"});
    const para = loremIpsum({p: value, startWithLoremIpsum: true});

    setParagraph(para);
  };

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
        {paragraph && (
          <div className="paragraphDiv">
           <p className="paragraph">
            {paragraph}
           </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
