import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import PackImg from "../media/covers/connew1(1).jpg";

function Packages() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="otherHeroes"
        textClass="heroText"
        heroImage={PackImg}
        title="Full Service Events Center"
        text="Providing Custom Event experiences."
        btnText="Learn More"
        btnClass="homeBtn"
        url="/"
        />
        <Footer/>
        </>
    )   
}

export default Packages;