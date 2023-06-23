import "../courses/style/CreateCoursePack.css";
import { ChevronDownIcon, ChevronRightIcon,XCircleFillIcon, CheckCircleFillIcon } from "@primer/octicons-react";
import emptyimage from "../../../../../assets/emptyimage.jpg";
import VideoSelector from "../../../../videos/VideoSelector";
import React, { useState, useEffect } from "react";
import { fetchCoursesByDiscipline } from "../../../../api/api"; // Import the fetchCoursesByDiscipline function from your API module
import { createPack } from "../../../../api/api"; // Replace "<path_to_createPack_function>" with the actual path to the file containing the createPack function

const CreatePackForm = () => {
  const [showVideoPage, setShowVideoPage] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [titre, setCourseTitle] = useState("");
  const [disciplineId, setCourseDiscipline] = useState(null); // Renamed to disciplineId for clarity
  const [niveau, setLevel] = useState("");
  const [price, setLatestPrice] = useState("");
  const [description, setShortDescription] = useState("");
  const [background_image, setBackgroundImage] = useState(null);
  // const [teaser, setTeaser] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCourseTitleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  const handlePackDisciplineChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    setCourseDiscipline(selectedValue);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleLatestPriceChange = (event) => {
    setLatestPrice(event.target.value);
  };

  const handleShortDescriptionChange = (event) => {
    setShortDescription(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setBackgroundImage(file);
    }
  };



  const handleButtonClick = () => {
    setShowVideoPage(!showVideoPage);
  };

  const handleVideoSelection = (video) => {
    const isSelected = selectedVideos.some(
      (selectedVideo) => selectedVideo.id === video.id
    );

    if (isSelected) {
      setSelectedVideos((prevSelectedVideos) =>
        prevSelectedVideos.filter(
          (selectedVideo) => selectedVideo.id !== video.id
        )
      );
    } else {
      setSelectedVideos((prevSelectedVideos) => [...prevSelectedVideos, video]);
    }
  };

  // console.log("Selected Videos:", selectedVideos.length);

  useEffect(() => {
    const fetchVideoData = async () => {
      if (disciplineId) {
        try {
          const courses = await fetchCoursesByDiscipline(disciplineId);
          setVideoData(
            courses.map((course) => ({
              id: course.id,
              image: course.background_image,
              yogaType: course.discipline_name,
              yogaDuration: course.duration,
              yogaLevel: course.niveau,
              videoTitle: course.titre,
            }))
          );
        } catch (error) {
          console.error("Failed to fetch video data:", error);
        }
      }
    };

    fetchVideoData();
  }, [disciplineId]);

  // Sample video data for the map

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const packData = {
      titre: titre,
      discipline_id: disciplineId,
      niveau: niveau,
      price: parseFloat(price),
      description: description,
      background_image: background_image instanceof File ? background_image : null,
      courses: selectedVideos.map((video) => video.id),
    };
  
    try {
      const response = await createPack(packData);
      setSuccessMessage("Pack created successfully");
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    } catch (error) {
      setErrorMessageMessage("Course created successfully");
      setShowErrorMessage(true);

      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
    }
  };
  

  return (
    <>
      <div className="create-pack-container">
        <div className="container">
          <div className="create-pack-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Pack Title */}
                <div className="col-form">
                  <div className="form-group">
                    <label className="form-label">Pack Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pack Title"
                      name="titre"
                      value={titre}
                      onChange={handleCourseTitleChange}
                    />
                  </div>
                </div>

                {/* Pack Discipline */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Pack Discipline</label>
                    <select
                      className="form-select"
                      value={disciplineId || ""}
                      onChange={handlePackDisciplineChange}
                    >
                      <option value="">Select</option>
                      <option value={1}>Yoga</option>
                      <option value={2}>Sophrologie</option>
                      <option value={3}>Yoga therapie</option>
                    </select>
                  </div>
                </div>

                {/* Level */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Level</label>
                    <select
                      className="form-select"
                      value={niveau}
                      onChange={handleLevelChange}
                    >
                      <option value="">Select</option>
                      <option value="débutant">Débutant</option>
                      <option value="intermédiaire">Intermédiaire</option>
                      <option value="avancée">Avancée</option>
                    </select>
                  </div>
                </div>

                {/* Regular Price */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Regular Price</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="29.99 DH"
                      aria-describedby="regular_price_help"
                      name="regular_price"
                      value={price}
                      onChange={handleLatestPriceChange}
                    />
                    <div id="regular_price_help" className="form-text">
                      The regular price will show as the course price.
                    </div>
                  </div>
                </div>

                {/* Image Loader */}
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Thumbnail Image:</label>
                    <input
                      type="file"
                      className="form-control file-control"
                      name="background_image"
                      accept="image/*"
                      onChange={handleBackgroundChange}
                    />
                    {background_image && (
                      <img
                        src={background_image}
                        alt="thumbnail"
                        className="img-thumbnail w-100px me-2 mt-2"
                      />
                    )}
                    {!background_image && (
                      <img
                        src={emptyimage}
                        alt="image"
                        className="img-thumbnail w-100px me-2 mt-2"
                      />
                    )}
                    <div className="form-text">Upload image size 750x550!</div>
                  </div>
                </div>

                {/* Description */}
                <div className="col-md-6">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label ">Short Description</label>
                      <textarea
                        className="form-control"
                        name="short_desc"
                        rows="6"
                        placeholder="Short description"
                        value={description}
                        onChange={handleShortDescriptionChange}
                      ></textarea>
                      <div className="form-text">
                        The description will highlight all available areas.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Teaser */}
                
                {/* Classes / Courses */}
                <div className="col-form">
                  <div
                    className="add-video-pack-btn"
                    disabled={!disciplineId}
                    onClick={handleButtonClick}
                  >
                    Classes / Courses
                    {showVideoPage ? (
                      <ChevronDownIcon
                        size={18}
                        className="add-video-pack-btn-icon"
                      />
                    ) : (
                      <ChevronRightIcon
                        size={18}
                        className="add-video-pack-btn-icon"
                      />
                    )}
                  </div>

                  <div className="big-container">
                    {showVideoPage && (
                      <div className="selector-video-card-grid">
                        {videoData.map((video) => (
                          <VideoSelector
                            key={video.id}
                            image={video.image}
                            yogaType={video.yogaType}
                            yogaDuration={video.yogaDuration}
                            yogaLevel={video.yogaLevel}
                            videoTitle={video.videoTitle}
                            onSelection={handleVideoSelection}
                            isSelected={selectedVideos.some(
                              (selectedVideo) => selectedVideo.id === video.id
                            )}
                            videoId={video.id}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                  <button type="submit" className="create-pack-btn">
                    Create Pack <ChevronRightIcon size={20} />
                  </button>
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePackForm;