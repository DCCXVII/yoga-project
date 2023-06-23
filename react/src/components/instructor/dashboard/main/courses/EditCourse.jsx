import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ChevronRightIcon } from "@primer/octicons-react";
import emptyimage from "../../../../../assets/emptyimage.jpg";
import { editCourse, fetchCourseData } from "../../../../api/api";

const EditCourse = () => {
  const { courseId } = useParams(); // Retrieve the course ID from the URL
  const [courseData, setCourseData] = useState(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDiscipline, setCourseDiscipline] = useState("");
  const [typeClass, setTypeClass] = useState("");
  const [level, setLevel] = useState("");
  const [latestPrice, setLatestPrice] = useState(0);
  const [shortDescription, setShortDescription] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleCourseTitleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  const handleCourseDisciplineChange = (event) => {
    setCourseDiscipline(event.target.value);
  };

  const handleTypeClassChange = (event) => {
    setTypeClass(event.target.value);
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

  const handleThumbnailImageChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setThumbnailImage(URL.createObjectURL(file));
    } else {
      setThumbnailImage(null);
    }
  };

  const handleVideoFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setVideoFile(file);
    } else {
      setVideoFile(null);
    }
  };

  useEffect(() => {
    fetchCourseData(courseId)
      .then((data) => {
        setCourseTitle(data.titre);
        setCourseDiscipline(data.discipline_id);
        setTypeClass(data.classe_id);
        setLevel(data.nivaeu);
        setLatestPrice(data.price);
        setShortDescription(data.description);
        setThumbnailImage(data.background_image);
        // Assuming you have a separate field for video file, you can set it here as well
      })
      .catch((error) => {
        console.error("Failed to fetch course data:", error);
      });
  }, [courseId]);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedCourseData = {
      titre: titre,
      discipline_id: discipline_id,
      classe_id: classe_id,
      niveau: niveau,
      price: parseFloat(price),
      description: description,
      background_image: background_image,
      video: video,
    };

    editCourse(courseId, updatedCourseData)
      .then((data) => {
        console.log("Course updated successfully:", data);
        // Handle any success messages or navigate to another page
      })
      .catch((error) => {
        console.error("Failed to edit course:", error);
        // Handle the error or display an error message to the user
      });
  };

  return (
    <>
      <div className="create-course-container">
        <div className="container">
          <div className="create-course-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-form">
                  <div className="form-group">
                    <label className="form-label">Course Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Course Title"
                      value={courseTitle}
                      onChange={handleCourseTitleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Course Discipline</label>
                    <select
                      className="form-select"
                      value={courseDiscipline}
                      onChange={handleCourseDisciplineChange}
                    >
                      <option value="">Select</option>
                      <option value="1">Yoga</option>
                      <option value="2">Sophrologie</option>
                      <option value="3">Yoga therapie</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Type Class</label>
                    <select
                      className="form-select"
                      value={typeClass}
                      onChange={handleTypeClassChange}
                    >
                      <option value="">Select</option>
                      <option value="1">Vinyasa</option>
                      <option value="2">Yin</option>
                      <option value="3">Relaxation dynamique</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Level</label>
                    <select
                      className="form-select"
                      value={level}
                      onChange={handleLevelChange}
                    >
                      <option value="">Select</option>
                      <option value="Débutant">Débutant</option>
                      <option value="Intermédiaire">Intermédiaire</option>
                      <option value="avancée">Avancée</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Latest Price</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="29.99"
                      aria-describedby="latest_price_help"
                      value={latestPrice}
                      onChange={handleLatestPriceChange}
                    />
                    <div id="latest_price_help" className="form-text">
                      The latest price will show as the course price.
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Thumbnail Image:</label>
                    <input
                      type="file"
                      className="form-control file-control"
                      name="thumbnailImage"
                      accept="image/*"
                      onChange={handleThumbnailImageChange}
                    />
                    {thumbnailImage && (
                      <img
                        src={thumbnailImage}
                        alt="thumbnail"
                        className="img-thumbnail w-100px me-2 mt-2"
                      />
                    )}
                    {!thumbnailImage && (
                      <img
                        src={emptyimage}
                        alt="image"
                        className="img-thumbnail w-100px me-2 mt-2"
                      />
                    )}
                    <div className="form-text">Upload image size 750x550!</div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Video File:</label>
                    <input
                      type="file"
                      className="form-control file-control"
                      name="videoFile"
                      accept="video/*"
                      onChange={handleVideoFileChange}
                    />
                    {videoFile && <div>Selected video: {videoFile.name}</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="form-label">Short Description</label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="6"
                      value={shortDescription}
                      onChange={handleShortDescriptionChange}
                    ></textarea>
                    <div className="form-text">
                      The description will highlight all available areas.
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="css-bbq5bh">
                    <button type="submit" className="create-course-btn">
                      <ChevronRightIcon size={20} /> Update Course <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCourse;
