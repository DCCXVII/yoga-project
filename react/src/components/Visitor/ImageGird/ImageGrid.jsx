import React, { useEffect, useState } from "react";
import "./ImageGrid.css";
import { fetchDisciplines } from "../../api/api";
import { Link } from "react-router-dom";

const ImageGrid = () => {
  const [disciplines, setDisciplines] = useState([]);

  useEffect(() => {
    const fetchDisciplinesData = async () => {
      try {
        const data = await fetchDisciplines();
        setDisciplines(data.discipline);
      } catch (error) {
        console.error("Failed to fetch disciplines:", error);
      }
    };

    fetchDisciplinesData();
  }, []);

  return (
    <div className="image-grid-container">
      <h2 className="image-grid-titre">Take a Step</h2>
      <div className="image-grid">
        {disciplines.map((discipline) => (
          <div key={discipline.id} className="image-item">
            <Link to={`/user/courses?discipline_id=${discipline.id}`}>
              <img src={discipline.background_img} alt={discipline.titre} />
              <div className="image-title">{discipline.titre}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
