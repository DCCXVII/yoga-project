import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const ForgetPasswordForm = () => {
    const [email, setEmail] = useState("");
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform forget password logic, such as sending a password reset email
      // You can use the 'email' state value for further processing
      console.log("Forget password form submitted");
    };
  
    return (
      <div className="signin-container">
        <h2 id="signin-title">Reset Password</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <label>
            E-mail
            <br />
            <input
              type="email"
              name="email"
              className="signin-input"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
  
          <button className="button-signin" id="signin-button" type="submit">
            Reset
          </button>
        </form>
      </div>
    );
  };
  
  export default ForgetPasswordForm;