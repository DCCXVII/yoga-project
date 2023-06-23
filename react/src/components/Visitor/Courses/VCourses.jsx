import React, { useEffect, useState } from "react";
import GreyCover from "../../GreyCover/GreyCover";
import Video from "../../videos/Video";
import {
  MdOutlineSignalCellularAlt1Bar,
  MdOutlineSignalCellularAlt2Bar,
} from "react-icons/all";
import "./style/VCourses.css";
import { fetchCourses } from "../../api/api";
import { useLocation } from "react-router-dom";

const VCourses = () => {
  const [coursesData, setCoursesData] = useState([]);
  const location = useLocation();
  const disciplineId = new URLSearchParams(location.search).get("discipline_id");

  useEffect(() => {
    fetchCourses({ discipline_id: disciplineId })
      .then((courses) => {
        const newData = courses.map((course) => ({
          id: course.id,
          image: course.background_image,
          yogaType: course.discipline_name,
          yogaDuration: course.duration,
          yogaLevel: course.niveau,
          videoTitle: course.titre,
          videoPlaylist: course.classe_name, // You can replace this with actual playlist data if available
          videoInstructor: course.instructor_name,
          icon:
            course.niveau === "Débutant" ? (
              <MdOutlineSignalCellularAlt1Bar />
            ) : (
              <MdOutlineSignalCellularAlt2Bar />
            ),
          VideoViewsNumber: course.views_number,
          VideoClientNumber: course.sells_number,
        }));
        setCoursesData(newData);
      })
      .catch((error) => {
        console.error("Failed to fetch courses:", error);
      });
  }, [disciplineId]);

  return (
    <>
      <GreyCover
        title="Nos Courses"
        paragraph="Trouvez l'équilibre émotionnel et la tranquillité intérieure grâce à la pratique régulière du yoga"
      />
      <div className="big-container-classes">
        <div className="classes-card-grid">
          {coursesData.map((course, index) => (
            <Video
              key={index}
              id={course.id}
              image={course.image}
              yogaType={course.yogaType}
              yogaDuration={course.yogaDuration}
              yogaLevel={course.yogaLevel}
              videoTitle={course.videoTitle}
              videoPlaylist={course.videoPlaylist}
              videoInstructor={course.videoInstructor}
              icon={course.icon}
              VideoClientNumber={course.VideoClientNumber}
              VideoViewsNumber={course.VideoViewsNumber}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default VCourses;
