import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ category, name, price, inStock, isVeg , index}) => {
  const dispatch = useDispatch;

  const handleRemoveCart = (index) => {
    dispatch(removeItem(index));
  
  };
  return (
    <div className="card w-56 p-2 m-2 shadow-lg bg-blue-200">
      <h1>{index}</h1>
      <h2 className="font-bold text-xl">Name - {name}</h2>
      <h3>Price - {price / 100}</h3>
      <h3>Category -{category}</h3>
      <h3>Stock -{inStock}</h3>
      <h3>IsVeg- {isVeg}</h3>
      <button
        className="cursor-pointer underline"
        onClick={() => {
          handleRemoveCart(index);
        }}
      >
        Remove
      </button>
      {/* <h4>{lastMileTravel.toPrecision(2)} minutes</h4> */}
    </div>
  );
};

export default FoodItem;
