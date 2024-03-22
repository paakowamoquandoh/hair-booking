import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import WeOffer from "../components/SectionTwo/ServicesSec";
import ServeImg from "../media/covers/cov1.jpg";

function Services() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="otherHeroes"
        textClass="heroText"
        heroImage={ServeImg}
        title="Beyond your expectations is what we do."
        text="Choose from a wide variety of options"
        btnText="Speak to Us"
        btnClass="homeBtn"
        url="/"
        />
        <WeOffer/>
        <Footer/>
        </>
    )     
}

export default Services;