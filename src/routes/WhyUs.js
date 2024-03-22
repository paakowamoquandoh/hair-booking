import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import WhyImg from "../media/covers/booking.jpg";
import Booking from "../components/Booking/Booking";
import FeaturedProperties from "../components/featuredProperties/FeaturedProperties"

function WhyUs() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="otherHeroes"
        textClass="heroText"
        heroImage={WhyImg}
        title="Seamless Reservations"
        text="Book Your Unforgettable Experience Today"
        btnText="Scroll down to Book Us!"
        btnClass="homeBtn"
        url=""
        />       
        <FeaturedProperties/>
        <Booking/>
        <Footer/>
        </>
    )    
}

export default WhyUs;