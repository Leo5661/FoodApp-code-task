import React, { useState } from "react";
import "./MainItemCard.css";
import veg from "../../assets/icons/veg.png";
import nonVeg from "../../assets/icons/non_veg.png";
import AddButton from "../addButton/AddButton";

function MainItemCard({ src, itemName, itemPrice, isVeg }) {
  let [count, setCount] = useState(0);

  const handelButtonClick = () => {
    count++;
    setCount(count);
  };

  const handelNegativeClick = () => {
    count--;
    setCount(count);
  };

  return (
    <div className="MainMenuCard">
      <img className="foodIcon" src={`src/assets/${src}`} alt="Food banner" />
      <div className="details">
        <div className="itemName">
          <span>{<img src={`${isVeg ? veg : nonVeg}`} />}</span>
          {itemName}
        </div>
        <div className="buttonContainer">
          <div className="price">
            <span>&#8377;</span> {itemPrice}
          </div>
          <AddButton
            count={count}
            onClick={handelButtonClick}
            onNegativeClick={handelNegativeClick}
            onPositiveClick={handelButtonClick}
          />
        </div>
      </div>
    </div>
  );
}

export default MainItemCard;
