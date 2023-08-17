import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurent = (id) => {
  const [restaurent, setRestaurent] = useState(null);
  const [menu, setMenu] = useState([]);

  // Get data from api
  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    //.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card);
    //console.log(json.data.cards[0].card.card.info.name)
    setRestaurent(json?.data?.cards[0]?.card?.card);
    setMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
        ?.card
    );
  }
  // return restaurant data
  return { restaurent, menu };
};

export default useRestaurent;
