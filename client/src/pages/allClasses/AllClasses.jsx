import "./allclasses.css";
import { Navbar } from "../../components";
import Footer from "../../containers/footer/Footer";

const AllClasses = () => {
  return (
    <div className="App">
    <div className="gradientBg">
      <Navbar/>
    </div>
    <div className="mainSection">
      <h1>This is where your video uploads go</h1>
    </div>
    <Footer/>
  </div>
  );
};

export default AllClasses;
