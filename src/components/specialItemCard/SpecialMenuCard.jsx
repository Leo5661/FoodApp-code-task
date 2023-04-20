import React, { useContext, useState } from "react";
import "./SpecialMenuCard.css";
import veg from "../../assets/icons/veg.png";
import nonVeg from "../../assets/icons/non_veg.png";
import AddButton from "../addButton/AddButton";
import CountContext from "../../context/CountContext";

function SpecialMenuCard({ src, itemName, itemPrice, isVeg }) {
  let [count, setCount] = useState(0);
  let [totalCount, setTotalCount] = useContext(CountContext);
  const handelButtonClick = () => {
    count++;
    totalCount++;
    setCount(count);
    setTotalCount(totalCount);
  };

  const handelNegativeClick = () => {
    count--;
    totalCount--;
    setCount(count);
    setTotalCount(totalCount);
  };

  return (
    <div className="specialMenuCard">
      <img className="banner" src={`src/assets/${src}`} alt="Food banner" />
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

export default SpecialMenuCard;
