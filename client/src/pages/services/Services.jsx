import "./services.css";
import { Navbar } from "../../components";
import Footer from "../../containers/footer/Footer";
import ProductList from "../../components/products/productList";

const Services = () => {
  return (
    <div className="App">
    <div className="gradientBg">
      <Navbar/>
    </div>
    <div className="mainSection">
      <ProductList/>
    </div>
    <Footer/>
  </div>
  );
};

export default Services;
