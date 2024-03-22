import "./featuredProperties.css";
import adepa from "../../media/images/floors/adepa.jpeg";
import asomdwe from "../../media/images/floors/asomdwe.jpg";
import aseda from "../../media/images/floors/aseda.jpg";
import nhyirah from "../../media/images/floors/nhyirah.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={adepa}
          alt="adepa"
          className="fpImg"
        />
        <span className="fpName">Adepa Court<i>(Outdoors)</i></span>
        <span className="fpCity">200 Guests Capacity</span>
        <span className="fpPrice">Starting from Ghc 8,100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={asomdwe}
          alt="asomdwe"
          className="fpImg"
        />
        <span className="fpName">Asomdwe Floor<i>(Ground Floor)</i></span>
        <span className="fpCity">350 Guests Capacity</span>
        <span className="fpPrice">Starting from Ghc 9000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={aseda}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aseda Floor<i>(Middle Floor)</i></span>
        <span className="fpCity">250 Guests Capacity</span>
        <span className="fpPrice">Starting from Ghc 8000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={nhyirah}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nhyirah Floor<i>Top Floor</i></span>
        <span className="fpCity">Up to 500 Guests Capacity</span>
        <span className="fpPrice">Starting from Ghc 12000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
