import React from "react";
import {
  VerifiedIcon,
  TriangleRightIcon,
  PlayIcon,
} from "@primer/octicons-react";
import "./style/Video.css";
import { BsPeople, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

function Video({
  id, // Add id prop here
  image,
  yogaType,
  yogaDuration,
  yogaLevel,
  videoTitle,
  videoPlaylist,
  videoInstructor,
  icon,
  VideoViewsNumber,
  VideoClientNumber,
}) {
  return (
    <>
      <div className="thumb-container">
        <div className="thumbnail-section">
        <Link to={`/user/courses/${id}`} >
            <div className="thumbnail-image">
              <img src={image} alt="" />
              <div className="play-icon">
                <PlayIcon size={60} />
              </div>
              <div className="yoga-details">
                <div className="yoga-type">{yogaType}</div>
                <div className="yoga-duration">{yogaDuration}</div>
                <div className="yoga-level">
                  {" "}
                  <div className="yoga-level-icon">{icon}</div>
                  {yogaLevel}
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="video-info">
          <ul>
            <li>
              <div className="video-feeds">
                <div className="first-line">
                  <div id="views-number">
                    <BsEye size={15} className="icon-feed" /> {VideoViewsNumber}
                  </div>
                  <div id="client-numer">
                    <BsPeople size={17} className="icon-feed" />{" "}
                    {VideoClientNumber}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to={`/user/courses/${id}`} className="video-title">
                {videoTitle}
            </Link>
            </li>
            <li>
              <Link to="" className="video-playlist">
                {videoPlaylist}
              </Link>
            </li>
            <li>
              <Link to="" className="video-instructor">
                {videoInstructor}{" "}
                <VerifiedIcon size={14} className="icon-verifier" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Video;
