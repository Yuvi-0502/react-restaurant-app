import { useState, useEffect, useContext } from "react";
import { restaurentList } from "../constants";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const searchTxt = "KFC";

  const [restaurents, setRestaurents] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);
  // searchText  is a local state variable
  const [searchText, setSearchText] = useState(""); // To create state variable
  // console.log("Jai Shree Ram");

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.5976816&lng=73.7153331&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurents(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurent(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();
 
  if (!isOnline) {
    return <h1> Offline, please check your internet connection!! </h1>;
  }

  // Conditional rendering
  // if restaurent is empty => shimmer UI
  // if restaurent has data => actual data UI

  // no render component(Early Return)
  if (!restaurents) return <h1> No Restaurents Found </h1>;

  return restaurents?.length == 0 ? (
    <Shimmer  />
  ) : (
    <div className="body">
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
         data-testid ="search-input"
          type="text"
          className="search-input focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          
        />
        <button
        data-testid ="search-btn"
          className="search-btn p-2 m-2 bg-purple-800 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, restaurents);
            //update the state - restaurents
            //console.log(data);
            setFilterRestaurent(data);
          }}
        >
          Search
        </button>
        {/* <input type="text" value={user.name} onChange={(e) =>{
          setUser({
            name:e.target.value,
            email:"Random email"
          })
        }} /> */}
      </div>
      <div className="restaurent-list flex flex-wrap" data-testid="res-list">
        {filterRestaurent?.length == 0 ? (
          <h1>No Restaurant match to the filter</h1>
        ) : (
          filterRestaurent.map((r) => {
            return (
              <Link to={"/restaurent/" + r?.info?.id} key={r?.info?.id}>
                <RestaurentCard {...r?.info} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
