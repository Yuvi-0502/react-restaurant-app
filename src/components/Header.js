import { useState, useContext } from "react";
import logo from "../assests/img/food_villa_image.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const loggedIn = () => {
  return true;
};
const Title = () => (
  <Link to="/">
    <img className="h-28 p-2" alt="logo" src={logo} />
  </Link>
);

//Component Composing in React ---> when one component is used in another component
const Header = () => {
  //let title = "Food Villa"
  // const [title, setTitle] = useState("Food Villa");
  // console.log("Hari OM");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();
  
  const {user} = useContext(UserContext)

  if (!isOnline) {
    return <h1> Offline, please check your internet connection!! </h1>;
  }
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-100 md:bg-orange-200">
      <Title />
      {/* <h1>{title}</h1>
      <button onClick={() => {setTitle("New Food App")}}>Change Title</button> */}
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            {" "}
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>

          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <span className="p-10 font-bold text-red-800">{user.name}</span>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
