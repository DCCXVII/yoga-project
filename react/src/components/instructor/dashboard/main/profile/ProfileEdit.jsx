import React, { useState, useEffect } from "react";
import "./style/ProfileEdit.css";
import { ChevronRightIcon,CheckCircleFillIcon, XCircleFillIcon } from "@primer/octicons-react";
import { saveProfile, fetchInstructorProfileData } from "../../../../api/api";

const ProfileEdit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [instagram_url, setInstagram_url] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const profileData = await fetchInstructorProfileData();
      const [firstName, lastName] = profileData.name.split(" ");
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(profileData.email);
      setInstagram_url(profileData.instagram_url);
      setDescription(profileData.description);
    } catch (error) {
      setErrorMessage("Failed to fetch profile data");
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleInstagramUrlChange = (event) => {
    setInstagram_url(event.target.value);
  };

  const handleTwitterChange = (event) => {
    setTwitter(event.target.value);
  };

  const handleFacebookChange = (event) => {
    setFacebook(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const fullName = firstName + " " + lastName;
    const profileData = {
      fullName,
      email,
      instagram_url,
      description,
    };

    try {
      const response = await saveProfile(profileData);
      setSuccessMessage("Profile saved successfully");
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

    } catch (error) {
      setErrorMessage("Failed to save profile");
      setShowErrorMessage(true);

      // Hide error message after 7 seconds
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 7000);

      console.error(error); // You can handle the error case here
    }
  };

  return (
    <>
      <div className="create-profile-container">
        <div className="container">
          <div className="create-profile-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="fname"
                      value={firstName}
                      onChange={handleFirstNameChange}
                    ></input>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://www.example.com/"
                      name="instagram_url"
                      value={instagram_url}
                      onChange={handleInstagramUrlChange}
                    ></input>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="lname"
                      value={lastName}
                      onChange={handleLastNameChange}
                    ></input>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                    ></input>
                  </div>
                </div>

                <div className="col-form">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Short Biography</label>
                      <textarea
                        className="form-control"
                        name="short_desc"
                        rows="6"
                        value={description}
                        onChange={handleDescriptionChange}
                      ></textarea>
                      <div className="form-text">
                        Your descriptiongraphy should have at least 50
                        characters, links and coupon codes are not permitted.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="css-bbq5bh">
                    <button type="submit" className="create-profile-btn">
                      <ChevronRightIcon size={20} /> Save
                      <span></span>
                    </button>
                  </div>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
