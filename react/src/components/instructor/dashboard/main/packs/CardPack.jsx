import React, { useState } from "react";
import {
  PeopleIcon,
  KebabHorizontalIcon,
  PencilIcon,
  XIcon,
  PlayIcon,
  VerifiedIcon,
  TrophyIcon,
} from "@primer/octicons-react";
import "./style/CardPack.css";
const CardPack = ({
  image,
  yogaType,
  videoInstructor,
  cpVideoDescription,
  videoTitle,
  cpFeedsViewsNumber,
  cpFeedsClientNumber,
  cpPackLevel,
}) => {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }
  return (
    <>
      <div className="cp-thumb-container">
        <div className="cp-thumbnail-section">
          <a href="" className="cp-yoga-thumbnail">
            <div className="cp-thumbnail-image">
              <img src={image} alt="" />

              <div className="cp-yoga-details">
                <div className="cp-yoga-menu">
                  <KebabHorizontalIcon size={17} />
                  <div className="cp-dropdown-container">
                    <a href="#">
                      <PencilIcon size={17} className="icon-card" />
                      Edit Pack
                    </a>
                    <a>
                      <XIcon size={17} className="icon-card" />
                      Delete Pack
                    </a>
                  </div>
                </div>
                <div className="cp-yoga-type">{yogaType}</div>
              </div>
            </div>
          </a>
        </div>
        <div className="cp-video-info">
          <ul>
            <li>
              <a href="" className="cp-video-title">
                {videoTitle}
              </a>
            </li>

            <li>
              <div className="cp-feeds">
                <div className="first-line">
                  <div id="videos-number">
                    <PlayIcon size={15} className="icon-feed" />{" "}
                    {cpFeedsViewsNumber}
                  </div>

                  <div id="pack-level">
                    <TrophyIcon size={16} className="icon-feed" /> {cpPackLevel}
                  </div>
                  <div id="client-numer">
                    <PeopleIcon size={17} className="icon-feed" />{" "}
                    {cpFeedsClientNumber}
                  </div>
                </div>
              </div>
            </li>
            <hr className="cc-feeds-line" />
            <li>
              <div className="cp-video-description">
                {expanded
                  ? cpVideoDescription
                  : `${cpVideoDescription.slice(0, 90)}...`}
                <div
                  className={expanded ? "cp-overlay hidden" : "cp-overlay"}
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

export default CardPack;
