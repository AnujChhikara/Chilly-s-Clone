import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Carousel() {
  const images = ["/main.jpg"];
  return (
    <div className="mt-20 px-20">
      <AwesomeSlider items={images} play={true} interval={3000}></AwesomeSlider>
    </div>
  );
}
export default Carousel;
