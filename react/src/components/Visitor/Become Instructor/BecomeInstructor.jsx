import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./BecomeInstructor.css";
import { useNavigate, Link } from "react-router-dom";
import { becomeInstructor } from "../../api/api";
import { ErrMessage, SuccessMessage, WarningMessage, InfoMessage } from "../../messages/Messages";

const BecomeInstructor = () => {
  const navigate = useNavigate();

  const [telephone, setTelephone] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // Added state for message type


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("");
    setMessageType("");

    // Regular expression for phone number (000000000 format)
    const phoneRegex = /^\d{9}$/;
    // Regular expression for file size (max: 4MB)
    const maxFileSize = 4 * 1024 * 1024; // 4MB in bytes

    try {
      // Validate phone number
      if (!phoneRegex.test(telephone)) {
        throw new Error("Invalid phone number format");
      }

      // Validate file size
      if (file && file.size > maxFileSize) {
        throw new Error("File size exceeds the maximum limit");
      }

      // Call the API function
      await becomeInstructor(telephone, file);

      // Reset the form fields
      setTelephone("");
      setFile(null);

      // Set success message
      setMessage("Requête a été envoyée avec succès");
      setMessageType("success");
    } catch (error) {
      // Set error message
      setMessage(`Échec de l'envoi de la demande`);
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="BIns-container">
        <h2 id="BIns-title">Devenir instructeur</h2>
        <br />
        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            {/* Conditionally render the message component based on messageType */}
            {messageType === "error" && <ErrMessage message={message} />}
            {messageType === "success" && <SuccessMessage message={message} />}
            {messageType === "warning" && <WarningMessage message={message} />}
            {messageType === "info" && <InfoMessage message={message} />}

            <br />
            <label>
              Téléphone
              <br />
              <input
                type="tel"
                name="telephone"
                className="BIns-input"
                placeholder="000 - 000 - 000"
                value={telephone}
                onChange={handleTelephoneChange}
              />
            </label>
            <br />
            <label>
              File Uploader (PDF)
              <br />
              <input
                type="file"
                name="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="BIns-input pdfUploader"
              />
            </label>
            <br />

            <button
              type="submit"
              className="button-BIns"
              id="BIns-button"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-icon">{AiOutlineLoading3Quarters}</div>
              ) : (
                "Faire une demande"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
