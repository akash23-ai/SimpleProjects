import React from "react";

function Otp() {
  return (
    <div className="mainDiv">
      <div className="otpDiv">
        <h1>LOGIN via OTP</h1>
        <input type="text" placeholder="Enter Your Number" />
        <button type="submit">Send OTP</button>
      </div>
    </div>
  );
}

export default Otp;
