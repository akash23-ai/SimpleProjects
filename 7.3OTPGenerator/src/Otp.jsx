import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function Otp() {

  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    if(number.length !== 10){
      alert("Enter a valid number")
      return
    }
    if(number[0] != 9 && number[0] != 8 && number[0] != 7){
      setNumber("")
      alert("Please check your number")
      return
    }

    setNumber("")
    navigate("/login")
    console.log("hi there navigate")
    console.log(number)
  }
  return (
    <div className="mainDiv">
      <div className="otpDiv">
        <h1>LOGIN via OTP</h1>
        <input type="text" className="textBox" value={number} maxLength={10} placeholder="Enter Your Number" onChange={(e) => setNumber(e.target.value)} />
        <button type="submit" onClick={handleClick}>Send OTP</button>
      </div>
    </div>
  );
}

export default Otp;
