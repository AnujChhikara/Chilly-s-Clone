import Navbar from "./Components/Navbar";
import FloatNav from "./Components/FloatingNavbar";
import Body from "./Components/Body";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Home() {
  return (
    <div className="w-[100vw]">
      <div>
        <FloatNav />
      </div>
      <div className="mb-10">
        <Navbar />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}
export default Home;
