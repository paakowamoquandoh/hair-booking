import "./booking.css";
import { Navbar } from "../../components";
import Footer from "../../containers/footer/Footer";

const Booking = () => {
  return (
    <div className="App">
    <div className="gradientBg">
      <Navbar/>
    </div>
    <div className="mainSection">
      <h1>This is the booking section</h1>
    </div>
    <Footer/>
  </div>
  );
};

export default Booking;
