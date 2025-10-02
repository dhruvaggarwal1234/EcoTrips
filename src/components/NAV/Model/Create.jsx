import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";  // default styles
import "./Create.css";

function Create() {
  const [phone, setPhone] = useState("");

  return (
    <>
      <div className="Login_box">
        <label className="ml-label">Mobile Number</label>

        <PhoneInput
          country={"in"}              // default India
          value={phone}
          onChange={setPhone}         // phone contains full value with dial code
          inputProps={{
            name: "phone",
            required: true,
            autoFocus: false,
          }}
          inputClass="phone-input"    // you can style this in CSS
          containerClass="phone-input-container"
        />
      </div>

      <button className="login-button">CONTINUE</button>

      <div className="or-row">
        <div className="line" />
        <div className="or-text">Or LogIn/SignUp With</div>
        <div className="line" />
      </div>

      <div className="social-row">
        <button className="social-btn">G</button>
        <button className="social-btn">M</button>
      </div>

      <div className="footer-text">
        By proceeding, you agree to MakeMyTrip's{" "}
        <a href="#privacy">Privacy Policy</a>, <a href="#ua">User Agreement</a> and{" "}
        <a href="#tcs">T&Cs</a>
      </div>
    </>
  );
}

export default Create;
