import { Outlet } from "react-router-dom";
import "../index.css";
import Slider from "../components/Visitor/Slider/Slider";
import ImageGrid from "../components/Visitor/ImageGird/ImageGrid";
import InstructorSection from "../components/Visitor/Sections/InstructorSection";
import SubVideo from "../components/Visitor/Courses/SubVideo";
import SliderControlle from "../components/Visitor/Slider controle/SliderControlle";
const DefaultPage = () => {
  return (
    <>
      <Slider />
      <ImageGrid />
      <SliderControlle title={"Instructeurs"}/>
      <SubVideo/>


    </>
  );
};

export default DefaultPage;
