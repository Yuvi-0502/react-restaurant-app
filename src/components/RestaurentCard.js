import { IMG_URL } from "../constants";

const RestaurentCard = ({cloudinaryImageId,name,cuisines,lastMileTravel}) => {
    return (
      <div className="card w-56 p-2 m-2 shadow-lg bg-pink-50">
        <img
          src={
            IMG_URL +
            cloudinaryImageId
          }
          alt=""
        />  
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines[0]}</h3>
        {/* <h4>{lastMileTravel.toPrecision(2)} minutes</h4> */}
      </div>
    );
  };

  
  export default RestaurentCard;