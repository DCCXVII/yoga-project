import React, { useState } from "react";
import "./style/ChangePassword.css";
import { changePassword } from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import { XCircleFillIcon, CheckCircleFillIcon } from "@primer/octicons-react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match");
      return;
    }

    try {
      // Call the changePassword function from the API
      const message = await changePassword(currentPassword, newPassword);
      console.log(message); // You can handle the success message here

      setSuccessMessage(message);
      setErrorMessage(""); // Clear the error message
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="change-password-container">
      <h2 className="change-pwd">Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="labels" htmlFor="currentPassword">
            Current Password
          </label>
          <input
            className="password_input"
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
        </div>
        <div className="form-group">
          <label className="labels" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="password_input"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <div className="form-group">
          <label className="labels" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            className="password_input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {errorMessage && (
          <div className="error-message">
            <XCircleFillIcon className="message-icons" size={16} />
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className="success-message">
            <CheckCircleFillIcon className="message-icons" size={16} />{" "}
            {successMessage}
          </div>
        )}
        <button className="change-password-btn" type="submit">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
