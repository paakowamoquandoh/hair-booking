import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./hero.css";

function HeroSection(props) {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Navigate to the "WhyUs" page when the button is clicked
        navigate('/whyus');
    };

    return (
        <>
            <div className={props.className}>
                <img alt="heroImage" src={props.heroImage} />

                <div className={props.textClass}>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <button className={props.btnClass} onClick={handleButtonClick}>
                        {props.btnText}
                    </button>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
