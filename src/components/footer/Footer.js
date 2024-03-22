import "./footer.css";
import { Instagram, Facebook, Twitter, Youtube } from 'react-feather';

const Footer = () => {
    return(
        <div className="footer">
            <div className="topside">
                <div>
                <h1>Las<i className="reColor">Vegas</i></h1>
                <p>Your one stop event center for all occasions.</p>
                </div>
                <div>
                    <a href="/"><Twitter/></a>
                    <a href="/"><Facebook/></a>
                    <a href="/"><Instagram/></a>
                    <a href="/"><Youtube/></a>
                </div>
            </div>



            <div className="bottom">
                <div>
                    <h4>Services</h4>
                    <a href="/">Branding</a>
                    <a href="/">Advertising</a>
                    <a href="/">Growth Strategy</a>
                    <a href="/">Packages</a>
                </div>
                <div>
                    <h4>Our Packages</h4>
                    <a href="/">Client Portal</a>
                    <a href="/">Blog</a>
                    <a href="/">Partners</a>
                    <a href="/">Email Newsletter</a>
                </div>
                <div>
                    <h4>About Us</h4>
                    <a href="/">Our Team</a>
                    <a href="/">Our Work</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Contact</h4>
                    <a href="/">lasvegasleisure.com</a>
                    <a href="/">+233 55 107 1634</a>
                    <a href="/">New Bortianor, Lane 3 Junction</a>
                    <a href="/">lasvegasleisurecenter10@gmail.com</a>
                </div>
            </div>
        </div>
    )
}


export default Footer;