import { useState } from "react";
import "./SignUp.css";
import "../../index.css";
import {
  CheckCircleFillIcon,
  CheckCircleIcon,
  AlertIcon,
} from "@primer/octicons-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import google from "../../assets/google.png";
import { signup } from "../api/api";
import { useNavigate } from "react-router-dom";
import { ErrMessage } from "../messages/Messages";

const SignUp = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [lowerValidated, setlowerValidated] = useState(false);
  const [upperValidated, setuppertValidated] = useState(false);
  const [numberValidated, setnumberValidated] = useState(false);
  const [lengthValidated, setlengthValidated] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [signupStatus, setSignupStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function checkPassword(password) {
    const lengthRegex = /.{8,}/;
    const upperRegex = /[A-Z]/;
    const lowerRegex = /[a-z]/;
    const numberRegex = /\d/;
    const lengthValidated = lengthRegex.test(password);
    const upperValidated = upperRegex.test(password);
    const lowerValidated = lowerRegex.test(password);
    const numberValidated = numberRegex.test(password);

    return {
      lengthValidated,
      upperValidated,
      lowerValidated,
      numberValidated,
    };
  }

  const formInputs = [
    {
      name: "nom",
      label: "Nom",
      type: "text",
      id: "nom",
      error: firstNameError,
    },
    {
      name: "prenom",
      label: "Prenom",
      type: "text",
      id: "prenom",
      error: lastNameError,
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      id: "email",
      error: emailError,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      id: "password",
      error: "",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Prepare the request body
    const fullName = formData.nom + " " + formData.prenom;
    const { email, password } = formData;

    setIsLoading(true);
    setIsError(false);

    try {
      // Call the signup function
      const token = await signup(fullName, email, password);
      console.log("Token:", token);

      // Display success message or redirect to another page
      setSignupStatus("success");
      navigate("/user"); // Redirect to the desired page after successful signup
    } catch (error) {
      // Display error message or handle the error
      setSignupStatus("error");
      console.error("Signup failed:", error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate first name
    if (name === "nom") {
      if (value.length > 6 && /[^a-zA-Z]/.test(value)) {
        setFirstNameError("Invalid nom format");
      } else {
        setFirstNameError("");
      }
    }

    // Validate last name
    if (name === "prenom") {
      if (value.length > 6 && /[^a-zA-Z]/.test(value)) {
        setLastNameError("Invalid prenom format");
      } else {
        setLastNameError("");
      }
    }

    // Validate email
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

    // Check password validations
    if (name === "password") {
      const {
        lengthValidated,
        upperValidated,
        lowerValidated,
        numberValidated,
      } = checkPassword(value);
      setlengthValidated(lengthValidated);
      setuppertValidated(upperValidated);
      setlowerValidated(lowerValidated);
      setnumberValidated(numberValidated);
    }
  };

  const handleFocus = () => {
    const checkPasswordDiv = document.querySelector(".check-password");
    if (checkPasswordDiv) {
      checkPasswordDiv.style.maxHeight = "100px";
    }
  };

  const handleBlur = () => {
    const checkPasswordDiv = document.querySelector(".check-password");
    if (checkPasswordDiv) {
      checkPasswordDiv.style.maxHeight = "0";
    }
  };

  const getPasswordValidationIcon = (condition) => {
    return condition ? (
      <CheckCircleFillIcon className="icon-google" size={16} />
    ) : (
      <CheckCircleIcon className="icon-google" size={16} />
    );
  };

  return (
    <>
      <div className="signup-container">
        <h2 id="signup-title">S'INSCRIRE</h2>
        <br />
        <p id="description-1">
          Découvrez les bienfaits du yoga et{" "}
          <span className="span">inscrivez-vous</span> dès maintenant pour
          <span className="span">
            commencer votre voyage vers l'équilibre et la sérénité intérieure
          </span>
          .
        </p>
        <br />
        <button className="button" id="signup-google-button">
          <img className="signup-google-button__icon" src={google} /> S'inscrire
          avec compte google
        </button>
        <br />
        <hr className="hr-text" data-content="OU" />
        <br />
        <form method="post" onSubmit={handleSubmit}>
          {signupStatus === "error" && <ErrMessage message="L'inscription a échoué. Veuillez réessayer."/>}
          {formInputs.map((input) => (
            <div key={input.id} className="signup-input-container">
              <label className="signup-label">
                {input.label}
                <br />
                <input
                  type={input.type}
                  id={input.id}
                  name={input.name}
                  className="signup-input"
                  value={formData[input.name]}
                  onChange={handleInputChange}
                  onFocus={input.name === "password" ? handleFocus : null}
                  onBlur={input.name === "password" ? handleBlur : null}
                />
                {input.error && <div className="error-line">{input.error}</div>}
              </label>
            </div>
          ))}

          <div className="check-password">
            <div>
              {getPasswordValidationIcon(lengthValidated)} 8 characters minimum
            </div>
            <div>
              {getPasswordValidationIcon(upperValidated)} Au moins une lettre
              majuscule
            </div>
            <div>
              {getPasswordValidationIcon(lowerValidated)} Au moins une lettre
              minuscule
            </div>
            <div>
              {getPasswordValidationIcon(numberValidated)} Au moins un chiffre
            </div>
          </div>
          <button className="button" type="submit" id="signup-submit-button">
            {isLoading ? (
              <div className="loading-icon">{AiOutlineLoading3Quarters}</div>
            ) : (
              "S'inscrire"
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
