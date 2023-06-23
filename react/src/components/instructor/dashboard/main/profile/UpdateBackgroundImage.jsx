import { useState } from "react";
import "./style/UpdateBackgroundImage.css";
import { ImageIcon } from "@primer/octicons-react";
import { changeBackgroundImage } from "../../../../api/api"; // Import the API function for changing the background image

const UpdateBackgroundImage = ({ onClose }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleUpdateBackgroundImage = async () => {
    try {
      if (file) {
        await changeBackgroundImage(file);
        // Handle success
        console.log("Background image changed successfully");
      }
      onClose();
    } catch (error) {
      // Handle error
      console.error("Failed to update background image:", error);
    }
  };

  return (
    <div className="image-dark-overlay">
      <div className="update-background-image">
        <div className="update-background-header">
          <h2>Update Background Image</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="current-background-image">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview of selected image" />
          ) : (
            <img
              src="https://d28gwrkukqy4h7.cloudfront.net/users/user-banner-default.png"
              alt="Default background image"
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
              For best results, upload PNG or JPG images of at least 800x600 px.
            </div>
            <input
              id="file-input"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="update-background-footer">
          <button
            className="update-background-btn"
            onClick={handleUpdateBackgroundImage}
          >
            Update Background Image
          </button>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateBackgroundImage;
