import "./servicesSec.css";
import OffersData from "./serviceData";
import offImg1 from "../../media/images/offers/decor.jpg";
import offImg2 from "../../media/images/offers/dj.jpg";
import offImg3 from "../../media/images/offers/food.jpg";
import offImg4 from "../../media/images/offers/dance.jpg";
import offImg5 from "../../media/images/offers/park.jpg";
import offImg7 from "../../media/images/offers/dress.jpg";
import offImg8 from "../../media/images/offers/bar.jpg";
import offImg9 from "../../media/images/offers/stand.jpg";
import offImg6 from "../../media/images/offers/smoke.jpg";


function WeOffer(){
    return(
        <div className="offers">
            <h1>What we Offer<i>!</i></h1>
            <p>Discover a world of possibilities at our event center, where we provide state-of-the-art venues, ensuring your special occasions, conferences, and celebrations unfold seamlessly in a setting of unparalleled elegance.</p>

            <div className="offerCard">
                <OffersData
                image={offImg1}
                heading="Full Decor"
                description="Transform your event into an enchanting spectacle with our Full Decor package. Elevate every detail as our expert team brings your vision to life, from elegant table settings to captivating floral arrangements."
                />
                <OffersData
                image={offImg2}
                heading="Dj Booth & Sound"
                description="Elevate your event experience with our exclusive packages, featuring professional DJ services and premium sound systems that guarantee a vibrant atmosphere, setting the perfect tone for unforgettable moments and lively celebrations."
                />
                <OffersData
                image={offImg3}
                heading="Buffet/Food Space"
                description="We offer tidy buffet areas or spaces that promise a delightful feast for your guests, adding a tasteful touch to your unforgettable events."
                />
                           
            </div>
            <div className="offerCard">
            <OffersData
            image={offImg8}
            heading="Bar with Fridges"
            description="Quench your guests' thirst with our premium bar area, complete with sleek fridges stocked with an array of beverages. Our package ensures a well-appointed and stylish setting, offering a refreshing oasis for socializing and toasting to unforgettable moments at your event."                
                />
                <OffersData
                image={offImg5}
                heading="Car Park for guests"
                description="Convenience meets hospitality at our venue with ample on-site parking, ensuring a stress-free arrival for your guests. Our dedicated car park provides a secure and easily accessible space, enhancing the overall comfort and accessibility of your event experience."
                />
                <OffersData
                image={offImg9}
                heading="Champagne and Cake Stand"
                description="Elevate your celebration with our exclusive champagne and cake stand, a sophisticated addition to our offerings that adds a touch of elegance to your special moments, ensuring a memorable and stylish event."
                />       
            </div>
            <div className="offerCard">
               
                <OffersData
                image={offImg7}
                heading="Dressing/Changing Rooms"
                description="Experience the epitome of comfort and convenience with our dedicated dressing/changing room facility, providing a private and well-appointed space for clients to prepare and freshen up during events, ensuring both luxury and functionality for every moment."
                />                
                <OffersData
                image={offImg4}
                heading="Dancefloor"
                description="Step into a world of rhythm and style with our diverse range of dance floors included in our packages, providing the perfect stage for you and your guests to dance the night away in a dynamic and vibrant setting tailored to your unique event."
                />
                <OffersData
                image={offImg6}
                heading="Extra Lighting, Smoke & Frieworks"
                description="Amplify the ambiance of your event with our exclusive package, offering enchanting smoke effects and additional lighting that transform your venue into a mesmerizing and visually captivating space, creating an unforgettable atmosphere for a truly magical experience."
                />               
            </div>
        </div>
    )
}

export default WeOffer;