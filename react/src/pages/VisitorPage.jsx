import Footer from "../components/Footer/Footer";
import Header from "../components/Visitor/Header";
import CourSection from "../components/Visitor/Sections/CourSection";
import InstructorSection from "../components/Visitor/Sections/InstructorSection";
import MouveSection from "../components/Visitor/Sections/MouveSection";
import PackSection from "../components/Visitor/Sections/PackSection";
import VideoSection from "../components/Visitor/Sections/VideoSection";
import Slider from "../components/Visitor/Slider/Slider";
import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import ImageGrid from "../components/Visitor/ImageGird/ImageGrid";
const VisitorPage = () => {
 
  return (
    <>
      <div>
        <VideoSection />
        <MouveSection />
        <CourSection />
        <InstructorSection />
        <PackSection />
        
      </div>
    </>
  );
};

export default VisitorPage;
