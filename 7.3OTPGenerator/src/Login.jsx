import React from "react";

function Login() {
  return (
    <div className="mainDiv">
      <div className="otpDiv">
        <h1>Give Your OTP</h1>
        <div className="container">
          <div className="inputfield">
            <input type="number" maxLength={1} className="inputBox"  />
            <input type="number" maxLength={1} className="inputBox"  />
            <input type="number" maxLength={1} className="inputBox"  />
            <input type="number" maxLength={1} className="inputBox"  />
          </div>
        </div>
        <button className="btn">Sumbit</button>
      </div>
    </div>
  );
}

export default Login;
