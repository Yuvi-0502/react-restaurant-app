import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurent from "../utils/useRestaurent";

const RestaurentMenu = () => {
  const params = useParams();
  const { id } = params;
  // const [restaurent, setRestaurent] = useState(null);
  // const [menu, setMenu] = useState([]);
  
  const {restaurent, menu} = useRestaurent(id); 


  // useEffect(() => {
  //   getRestaurentInfo();
  // }, []);

  // async function getRestaurentInfo() {
  //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=24.5976816&lng=73.7153331&restaurantId="+ id);
  //   const json = await data.json();
    //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
     //console.log(json.data.cards[0].card.card.info.name)
  //   setRestaurent(json?.data?.cards[0]?.card?.card);
  //   setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card);
  // }
  if (!restaurent) {
    return <Shimmer />;
  }

  return (
    <div className="menu flex">
      <div className="m-2 p-2">
        <h1 className="font-bold">Restaurent id : {restaurent?.info?.id} </h1>
        <h2 className="font-bold">{restaurent?.info?.name}</h2>
        <img src={IMG_URL + restaurent?.info?.cloudinaryImageId} alt="" className="m-2 p-2 w-56 shadow-lg bg-pink-500" />
        <h3>{restaurent?.info?.areaName}</h3>
        <h3>{restaurent?.info?.city}</h3>
        <h3>{restaurent?.info?.avgRating}</h3>
        <h3>{restaurent?.info?.costForTwoMessage}</h3>
      </div>
      <div className="p-2 m-2">
        <h1 className="font-bold"> MENU </h1>
        <ul>
          {(restaurent?.info?.name == "La Pino'z Pizza" || restaurent?.info?.name == "KFC" || restaurent?.info?.name == "Domino's Pizza" || restaurent?.info?.name == "Pizza Hut")? menu?.carousel?.map((item) => (
            <li key={item?.id}>{item?.title}</li>
          )):menu?.itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;
