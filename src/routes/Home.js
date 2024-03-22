import HomeImg from "../media/images/building/vegas.jpg";
import NavBar from "../components/navbar/nav";
import HomeHero from "../components/Hero/HomeHero";
import Footer from "../components/footer/Footer";
import FeaturesSection from "../components/SectionOne/Section";



function HomePage() {
    return(
        <>
        <NavBar/>
        <HomeHero 
        className="homeHero"
        textClass="heroText"
        heroImage={HomeImg}
        title="Welcome to Las Vegas Leisure Center Homepage"
        text="Your one stop event center for all occasions."
        btnText="Book Now!"
        btnClass="homeBtn"
        />
        <FeaturesSection/>
        <Footer/>
        </>
    )    
}

export default HomePage;

