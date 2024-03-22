import NavBar from "../components/navbar/nav";
import Hero from "../components/Hero/Hero";
import Footer from "../components/footer/Footer";
import ContactImg from "../media/images/team/teammain.jpg";

function ContactUs() {
    return(
        <>
        <NavBar/>
        <Hero 
        className="otherHeroes"
        textClass="heroText"
        heroImage={ContactImg}
        title="We value your feedback and inquiries"
        text="Our dedicated team is here to assist you."
        btnText="Contact Us"
        btnClass="homeBtn"
        url="/"
        />
        <Footer/>
        </>
    )   
}

export default ContactUs;