import React, { useState } from "react";
import {
  PeopleIcon,
  PlayIcon,
  VerifiedIcon,
  TrophyIcon,
} from "@primer/octicons-react";
import "./style/Pack.css";
const Pack = ({
  image,
  yogaType,
  videoInstructor,
  packVideoDescription,
  videoTitle,
  packFeedsViewsNumber,
  packFeedsClientNumber,
  packPackLevel,
}) => {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <>
      <div className="thumb-container">
        <div className="thumbnail-section">
          <a href="" className="pack-yoga-thumbnail">
            <div className="pack-thumbnail-image">
              <img src={image} alt="" />
              <div className="pack-yoga-details">
                <div className="pack-yoga-type">{yogaType}</div>
              </div>
            </div>
          </a>
        </div>
        <div className="pack-video-info">
          <ul>
            <li>
              <a href="" className="pack-video-title">
                {videoTitle}
              </a>
            </li>
            <li>
              <a href="" className="pack-video-instructor">
                {videoInstructor}{" "}
                <VerifiedIcon size={12} className="icon-verifier" />
              </a>
            </li>
            <li>
              <div className="pack-feeds">
                <div className="first-line">
                  <div id="videos-number">
                    <PlayIcon size={15} className="icon-feed" />{" "}
                    {packFeedsViewsNumber}
                  </div>

                  <div id="pack-level">
                    <TrophyIcon size={16} className="icon-feed" /> {packPackLevel}
                  </div>
                  <div id="client-numer">
                    <PeopleIcon size={17} className="icon-feed" />{" "}
                    {packFeedsClientNumber}
                  </div>
                </div>
              </div>
            </li>
            <hr className="divisor-hr"/>
            <li>
              <div className="pack-video-description">
                {expanded
                  ? packVideoDescription
                  : `${packVideoDescription.slice(0, 100)}...`}
                <div
                  className={expanded ? "pack-overlay hidden" : "pack-overlay"}
                ></div>
              </div>
              <button className="read-more-less" onClick={toggleExpanded}>
                {expanded ? "Read less" : "Read more"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pack;
