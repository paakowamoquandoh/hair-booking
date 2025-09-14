import "./contactus.css";
import { Navbar } from "../../components";
import Footer from "../../containers/footer/Footer";

const ContactUs = () => {
  return (
    <div className="App">
    <div className="gradientBg">
      <Navbar/>
    </div>
    <div className="mainSection">
      <h1>Email and Phone contact forms</h1>
    </div>
    <Footer/>
  </div>
  );
};

export default ContactUs;
