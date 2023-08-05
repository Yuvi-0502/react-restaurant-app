import { IMG_URL } from "../constants";

const RestaurentCard = ({cloudinaryImageId,name,cuisines,lastMileTravel}) => {
    return (
      <div className="card">
        <img
          src={
            IMG_URL +
            cloudinaryImageId
          }
          alt=""
        />  
        <h2>{name}</h2>
        <h3>{cuisines[0]}</h3>
        {/* <h4>{lastMileTravel.toPrecision(2)} minutes</h4> */}
      </div>
    );
  };

  
  export default RestaurentCard;