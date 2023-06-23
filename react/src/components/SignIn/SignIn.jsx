import React, { useState } from "react";
import { EyeClosedIcon, EyeIcon, AlertIcon } from "@primer/octicons-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import google from "../../assets/google.png";
import { login, userData } from "../api/api";
import "./SignIn.css";
import { useNavigate, Link } from "react-router-dom";
import {
  ErrMessage,
  SuccessMessage,
  WarningMessage,
  InfoMessage,
} from "../messages/Messages"; // Import the message components

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Merci de remplir tous les champs.");
      return;
    }

    setIsLoading(true);
    setIsError(false);

    try {
      await login(email, password);

      if (userData.role === "instructor") {
        navigate("/instructor");
      
      } else if (userData.role === "client") {
        navigate("/user");
      }else if(userData.role==="admin"){
        navigate("/admin")
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setErrorMessage(
        "L'email ou le mot de passe que vous avez saisi est incorrect."
      );
    }

    setIsLoading(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="signin-container">
        <h2 id="signin-title">Sign in</h2>
        <br />
        <form onSubmit={handleLogin}>
          {isError && <ErrMessage message={errorMessage} />} {/* Replace error message */}
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
          <label>
            Password
            <br />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="signin-input"
                value={password}
                onChange={handlePasswordChange}
              />
              {showPassword ? (
                <EyeIcon
                  className="show-hide-icon"
                  size={17}
                  onClick={handleTogglePassword}
                />
              ) : (
                <EyeClosedIcon
                  className="show-hide-icon"
                  size={17}
                  onClick={handleTogglePassword}
                />
              )}
            </div>
          </label>
          <br />

          <button
            type="submit"
            className="button-signin"
            id="signin-button"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-icon">{AiOutlineLoading3Quarters}</div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <br />
        <div className="forget-signup-links">
          <div id="forget-password-link">
            <Link to="/reset-password" id="signup-link">
              Mot de passe oublié
            </Link>
          </div>
          <br />
          <p>
            Nouveau sur Alo Moves ?{" "}
            <Link to="/signup" id="signup-link">
              S'inscrire
            </Link>
          </p>
        </div>
        <hr className="hr-text" data-content="Ou" />
        <button type="submit" className="button-signin google">
          <img className="google-icon" src={google} alt="Google" />
          S'inscrire avec compte google
        </button>
      </div>
    </>
  );
};

export default SignIn;
