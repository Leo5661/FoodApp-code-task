import React, { useState } from "react";
import veg from "../../assets/icons/veg.png";
import nonVeg from "../../assets/icons/non_veg.png";
import "./OrderCard.css";
import AddButton from "../addButton/AddButton";

function OrderCard({ id, name, price, quantity, isVeg, isCurrent }) {
  let [count, setCount] = useState(quantity);
  console.log(id, name, price, quantity, isVeg, isCurrent);
  const handelButtonClick = () => {
    count++;
    setCount(count);
  };

  const handelNegativeClick = () => {
    count--;
    setCount(count);
  };

  return (
    <div className="orderItemCard">
      <div className="itemDetails">
        <img className="typeOfFood" src={`${isVeg ? veg : nonVeg}`} alt="" />
        <div className="nameAndPrice">
          <div className="name">{name}</div>
          <div className="price">
            <span>&#8377;</span> {price}
          </div>
        </div>
        {isCurrent ? (
          <AddButton
            onClick={handelButtonClick}
            onPositiveClick={handelButtonClick}
            onNegativeClick={handelNegativeClick}
            count={count}
          />
        ) : (
          <div className="quantity marginRight">{count}</div>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
