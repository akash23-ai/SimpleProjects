import React from "react";

function Login() {
  return (
    <div className="mainDiv">
      <div className="otpDiv">
        <h1>LOGIN via OTP</h1>
        <div className="container">
          <div class="inputfield">
            <input type="number" maxlength="1" class="input" disabled />
            <input type="number" maxlength="1" class="input" disabled />
            <input type="number" maxlength="1" class="input" disabled />
            <input type="number" maxlength="1" class="input" disabled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
