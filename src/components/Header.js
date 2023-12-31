import { useState } from "react";
import logo from "../assests/img/food_villa_image.jpeg";
import { Link } from "react-router-dom";

const loggedIn = () => {
  return true;
};
const Title = () => (
  <Link to="/">
    <img className="logo" alt="logo" src={logo} />
  </Link>
);

//Component Composing in React ---> when one component is used in another component
const Header = () => {
  //let title = "Food Villa"
  // const [title, setTitle] = useState("Food Villa");
  // console.log("Hari OM");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      {/* <h1>{title}</h1>
      <button onClick={() => {setTitle("New Food App")}}>Change Title</button> */}
      <div className="nav-items">
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
        </ul>
      </div>
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
