import "./booking.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Booking = () => {
    const form = useRef()
    
    const bookUs = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_kv69zxh', 'template_wga5duc', form.current, 'Hmz4Sv5myGe0Ut__Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return(
        <div className="booking">
           <h2 className="bookingHeading">Fill out our booking form</h2>
           <form ref={form} onSubmit={bookUs} className="formControl">
            <input type="text" placeholder="Full Name" name="userName" required/>
            <input type="text" placeholder="Email" name="userEmail" required/>
            <input type="number" placeholder="Phone Number" name="userContact" required/>
            <input type="date" placeholder="Choose Date" name="bookingDate" required/>
            <input type="text" placeholder="Your Location" name="userLocation" required/>
            <input type="text" placeholder="Number of Guests" name="guestNumber" required/>
            <textarea placeholder="Event Type" name="message" cols={30}></textarea>
            <button className="submitButton" type="submit">Submit</button>
           </form>
        </div>
    )
}


export default Booking;