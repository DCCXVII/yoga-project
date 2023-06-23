import { useState } from "react";
import "./style/UpdateProfileImage.css";
import { ImageIcon } from "@primer/octicons-react";

const UpdateProfileImage = ({ onClose }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="image-dark-overlay">
      <div className="update-profile-image">
        <div className="update-profile-header">
          <h2>Update Profile Image</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="current-profile-image">
          {file ? (
            <img src={file} alt="Profile Image" />
          ) : (
            <img
              src="https://d28gwrkukqy4h7.cloudfront.net/users/ico-profile-default.png"
              alt="Profile Image"
            />
          )}
        </div>
        <div className="image-chooser">
          <div className="btn-and-description">
            <div className="icon-image-chooser">
              <ImageIcon size={70} className="icon" />
            </div>
            <label htmlFor="file-input" className="btn-image-chooser">
              Select a photo from your computer
            </label>
            <div className="image-chooser-description">
              For best results, upload PNG or JPG images of at least 300x300 px.
            </div>
            <input
              id="file-input"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="update-profile-footer">
          <button className="update-profile-btn">Update Profile Image</button>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileImage;
