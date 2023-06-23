// cc : course card
import React from "react";
import { Link } from "react-router-dom";
import {
  EyeIcon,
  PeopleIcon,
  KebabHorizontalIcon,
  PencilIcon,
  XIcon,
  PlayIcon,
} from "@primer/octicons-react";
import "./style/CardCourse.css";

function CardCourse({
  image,
  yogaType,
  yogaDuration,
  yogaLevel,
  ccVideoDescription,
  videoTitle,
  ccFeedsViewsNumber,
  ccFeedsClientNumber,
  courseId, 
}) {
  return (
    <>
      <div className="cc-thumb-container">
        <div className="cc-thumbnail-section">
          <Link
            to={`/instructor/dashboard/courses/${courseId}`}
            className="cc-yoga-thumbnail"
          >
            <div className="cc-thumbnail-image">
              <img src={image} alt="" />
              <div className="cc-play-icon">
                <PlayIcon size={60} />
              </div>
              <div className="cc-yoga-details">
                <div className="cc-yoga-menu">
                  <KebabHorizontalIcon size={17} />
                  <div className="cc-dropdown-container">
                    <Link to={`/instructor/dashboard/courses/${courseId}/edit`}>
                      <PencilIcon size={17} className="icon-card" />
                      Edit Course
                    </Link>
                    <Link to="">
                      <XIcon size={17} className="icon-card" />
                      Delete Course
                    </Link>
                  </div>
                </div>
                <div className="cc-yoga-type">{yogaType}</div>
                <div className="cc-yoga-duration">{yogaDuration}</div>
                <div className="cc-yoga-level">{yogaLevel}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="cc-video-info">
          <ul>
            <li>
              <a href="" className="cc-video-title">
                {videoTitle}
              </a>
            </li>
            <li>
              <div className="cc-video-description">{ccVideoDescription}</div>
            </li>
            <li>
              <div className="cc-feeds">
                <div className="first-line">
                  <div id="client-number">
                    <PeopleIcon size={18} className="icon-feed" />{" "}
                    {ccFeedsClientNumber} Enroll
                  </div>
                  <div id="views-number">
                    <EyeIcon size={18} className="icon-feed" />{" "}
                    {ccFeedsViewsNumber} Views
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CardCourse;
