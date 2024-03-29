import "./home.css";
import { Navbar } from "../../components";
import { Header } from "../../containers";
import Brand from "../../components/brands/Brand";
import WhyUs from "../../containers/whyus/WhyUs";
import Features from "../../containers/features/Features";
import Prospects from "../../containers/prospects/Prospects";
import CTA from "../../components/cta/CTA";
import Blog from "../../containers/blog/Blog";
import Footer from "../../containers/footer/Footer";

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
