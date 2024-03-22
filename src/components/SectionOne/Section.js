import featImg1 from "../../media/images/spaces/sp1.jpg";
import featImg2 from "../../media/images/spaces/sp2.jpg";
import featImg3 from "../../media/images/spaces/feat2.jpg";
import featImg4 from "../../media/images/spaces/feat6.jpg";
import featImg5 from "../../media/images/spaces/feat1.jpeg";
import featImg6 from "../../media/images/spaces/feat5.jpeg";
import featImg7 from "../../media/images/spaces/feat4.jpg";
import featImg8 from "../../media/images/spaces/feat3.jpg";
import "../SectionOne/section.css";

import FeaturesData from "../SectionOne/FeaturesData";
const FeaturesSection = () => {
    return (
        <div className="mainSection">
            <h1>Our Main Features</h1>
            <p>Discover Unmatched Elegance and Versatility at Las Vegas Leisure Center.</p>
           
            <FeaturesData
            className="firstFeature"
            heading="Exquisite Event Spaces:"
            description="Experience luxury in every detail with our exquisitely designed event spaces. From grand ballrooms to intimate lounges, each venue is meticulously crafted to provide a sophisticated backdrop for your special occasions."
            button="Book Now"
            image1={featImg1}
            image2={featImg2}
            /><hr/>

            <FeaturesData
            className="secondFeature"
            heading="Personalized Event Planning:"
            description="Our dedicated team of event experts is committed to bringing your vision to life. Enjoy a seamless planning process with personalized consultations, tailored packages, and meticulous attention to every detail, ensuring a flawless and memorable event."
            button="Learn More"
            image1={featImg4}
            image2={featImg3}
            /><hr/>

             <FeaturesData
            className="firstFeature"
            heading="State-of-the-Art Facilities:"
            description="Elevate your events with cutting-edge technology and amenities. Our state-of-the-art facilities offer modern conveniences, audiovisual enhancements, and versatile setups to accommodate a wide range of event styles and requirements."
            button="Contact Us"
            image1={featImg5}
            image2={featImg6}
            /><hr/>

            <FeaturesData
            className="secondFeature"
            heading="Scenic Surroundings and Ambiance:"
            description="Immerse yourself in a captivating ambiance complemented by scenic surroundings. Whether it's a city skyline, lush gardens, or architectural marvels, our event center provides a picturesque backdrop that adds an extra layer of elegance to your celebrations."
            button="Learn More"
            image1={featImg7}
            image2={featImg8}
            /><hr/>
        </div>
    )
}


export default FeaturesSection;