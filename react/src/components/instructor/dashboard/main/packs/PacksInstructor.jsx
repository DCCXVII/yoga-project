import React from "react";
import { useQuery } from "react-query";
import CardPack from "./CardPack";
import { fetchInstructorPacksData } from "../../../../api/api"; // Replace <path_to_api> with the actual path to the api file
import "./style/Packs.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function PacksInstructor() {


  const { data, error, isLoading } = useQuery(
    "instructorPacks",
    fetchInstructorPacksData
  );

  if (isLoading) {
    return <div className="loading-icon">{AiOutlineLoading3Quarters}</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="big-container">
        <div className="instructor-packs-card-grid">
          {data.map((pack) => (
            <CardPack
            key={pack.id}
              image={pack.background_image} // Replace with the appropriate field from the pack object
              yogaType={pack.titre}
              yogaLevel={pack.niveau}
              videoTitle={pack.titre}
              videoPlaylist={pack.description}
            //   videoInstructor={pack.coach_id}
              cpVideoDescription={pack.description}
              cpFeedsClientNumber={pack.views_number}
              cpFeedsViewsNumber={pack.sells_number}
              cpPackLevel={pack.niveau}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PacksInstructor;
