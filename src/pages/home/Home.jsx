import "./home.css";
import { Navbar } from "../../components";
import { Header } from "../../containers";
import Brand from "../../components";
import WhyUs from "../../containers";
import Features from "../../containers";
import Prospects from "../../containers";
import CTA from "../../components";
import Blog from "../../containers";
import Footer from "../../containers";

const Home = () => {
  return (
    <div className="App">
    <div className="gradientBg">
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhyUs/>
    <Features/>
    <Prospects/>
    <CTA/>
    <Blog/>
    <Footer/>
  </div>
  );
};

export default Home;
