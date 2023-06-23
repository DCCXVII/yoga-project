import { fetchPacks } from '../../api/api';
import { useEffect, useState } from 'react';
import GreyCover from '../../GreyCover/GreyCover';
import Pack from './Pack';
import './style/Packs.css';

const Packs = () => {
  const [packsData, setPacksData] = useState([]);

  useEffect(() => {
    const fetchPacksData = async () => {
      try {
        const data = await fetchPacks();
        setPacksData(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to fetch packs:', error);
      }
    };

    fetchPacksData();
  }, []);

  return (
    <>
      <GreyCover
        title="Nos Packs"
        paragraph="Élevez votre pratique du yoga avec nos packs axés sur la force et la flexibilité"
      />
      <div className="big-container-classes">
        <div className="classes-card-grid">
          {packsData.map((video, index) => (
            <Pack
              key={index}
              image={video.background_image}
              yogaType={video.yogaType}
              yogaDuration={video.yogaDuration}
              yogaLevel={video.niveau}
              videoTitle={video.titre}
              videoPlaylist={video.videoPlaylist}
              videoInstructor={video.instructor_name}
              packVideoDescription={video.description || ''} // Provide a default value if packVideoDescription is undefined
              packFeedsClientNumber={video.sells_number}
              packFeedsViewsNumber={video.views_number}
              packPackLevel={video.niveau}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Packs;
