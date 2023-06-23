import "./style/Profile.css";
import { DeviceCameraIcon, GearIcon } from "@primer/octicons-react";
import { useState, useEffect } from "react";
import UpdateProfileImage from "./UpdateProfileImage";
import UpdateBackgroundImage from "./UpdateBackgroundImage";
import { Link } from "react-router-dom";
import { fetchInstructorProfileData } from "../../../../api/api";

const Profile = () => {
  const [isProfileImageHovering, setIsProfileImageHovering] = useState(false);
  const [isBackgroundImageHovering, setIsBackgroundImageHovering] =
    useState(false);
  const [showUpdateProfileImage, setShowUpdateProfileImage] = useState(false);
  const [showUpdateBackgroundImage, setShowUpdateBackgroundImage] =
    useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [userDataProfile, setUserDataProfile] = useState({});

  const handleProfileImageHover = () => {
    setIsProfileImageHovering(true);
  };

  const handleProfileImageMouseLeave = () => {
    setIsProfileImageHovering(false);
  };

  const handleBackgroundImageHover = () => {
    setIsBackgroundImageHovering(true);
  };

  const handleBackgroundImageMouseLeave = () => {
    setIsBackgroundImageHovering(false);
  };

  const handleUpdateProfileImageClick = () => {
    setShowUpdateProfileImage(true);
  };

  const handleCloseUpdateProfileImage = () => {
    setShowUpdateProfileImage(false);
  };

  const handleUpdateBackgroundImageClick = () => {
    setShowUpdateBackgroundImage(true);
  };

  const handleCloseUpdateBackgroundImage = () => {
    setShowUpdateBackgroundImage(false);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await fetchInstructorProfileData();
        setUserDataProfile(data);
      } catch (error) {
        console.error("Failed to fetch profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      {/* {showOverlay && <div className="overlay" />} */}
      {showOverlay && <UpdateProfileImage onClose={handleCloseOverlay} />}
      {showOverlay && <UpdateBackgroundImage onClose={handleCloseOverlay} />}
      <div className="dashboard-profile-container">
        <button
          className="btn btn-change-background"
          onMouseEnter={handleBackgroundImageHover}
          onMouseLeave={handleBackgroundImageMouseLeave}
          onClick={handleUpdateBackgroundImageClick}
        >
          {isBackgroundImageHovering ? "Edit" : <DeviceCameraIcon size={24} />}
        </button>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${userDataProfile.background_img})` }}
        ></div>
        <div className="profile-info">
          <div className="profile-image">
            <img
              src={userDataProfile.img_url}
              alt="Profile Image"
              className={isProfileImageHovering ? "profile-image-hover" : ""}
            />
            <button
              className="btn btn-change-profile-image"
              onMouseEnter={handleProfileImageHover}
              onMouseLeave={handleProfileImageMouseLeave}
              onClick={handleUpdateProfileImageClick}
            >
              {isProfileImageHovering ? "Edit" : <DeviceCameraIcon size={24} />}
            </button>
          </div>
          <div className="profile-name">
            <h2>{userDataProfile.name}</h2>
          </div>
        </div>

        <div className="profile-data">
          <Link to="/instructor/profile/edit" className="btn-edit-profile">
            Edit Profile
          </Link>
          <button className="btn btn-edit-account">
            <Link to="/instructor/profile/change-password">
              <GearIcon size={18} />
            </Link>
          </button>
        </div>
        <div className="profile-description">{userDataProfile.description}</div>
      </div>

      {showUpdateProfileImage && (
        <UpdateProfileImage onClose={handleCloseUpdateProfileImage} />
      )}

      {showUpdateBackgroundImage && (
        <UpdateBackgroundImage onClose={handleCloseUpdateBackgroundImage} />
      )}
    </>
  );
};

export default Profile;
