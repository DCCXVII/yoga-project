import React, { useState } from "react";
import { PlayIcon, PlusIcon, DashIcon } from "@primer/octicons-react";
import "./style/Video.css";

function VideoSelector({
  image,
  yogaType,
  yogaDuration,
  yogaLevel,
  videoTitle,
  onSelection,
  isSelected,
  videoId,
  
}) {
  const [isChecked, setIsChecked] = useState(isSelected);

  const handleClick = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
    onSelection({ id: videoId, image, yogaType, yogaDuration, yogaLevel, videoTitle });
  };

  return (
    <div className="thumb-container">
      <div className="thumbnail-section">
        <a className="yoga-thumbnail">
          <div className="thumbnail-image">
            <img src={image} alt="" />
            <div className="play-icon">
              <PlayIcon size={60} />
            </div>
            <div className="videoSelector-details">
              <div className="videoSelector-type">{yogaType}</div>
              <div className="videoSelector-duration">{yogaDuration}</div>
              <div className="videoSelector-level">{yogaLevel}</div>
            </div>
          </div>
        </a>
      </div>
      <div className="videoSelector-info">
        <ul>
          <li>
            <a href="" className="videoSelector-title">
              {videoTitle}
            </a>
          </li>
          <li>
            <div
              href=""
              className={`videoSelector-add-btn ${isChecked ? "remove" : ""}`}
              onClick={handleClick}
            >
              {isChecked ? "remove" : "add"}{" "}
              {isChecked ? (
                <DashIcon className="icon-add-pack" size={16} />
              ) : (
                <PlusIcon className="icon-add-pack" size={16} />
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VideoSelector;
