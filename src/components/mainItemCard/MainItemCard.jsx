import React from "react";
import "./MainItemCard.css";
import veg from "../../assets/icons/veg.png";
import nonVeg from "../../assets/icons/non_veg.png";

function MainItemCard({ src, itemName, itemPrice, isVeg }) {
  return (
    <div className="MainMenuCard">
      <img src={`src/assets/${src}`} alt="Food banner" />
      <div className="details">
        <div className="itemName">
          <span>{<img src={`${isVeg ? veg : nonVeg}`} />}</span>
          {itemName}
        </div>
        <div className="buttonContainer">
          <div className="price">
            <span>&#8377;</span> {itemPrice}
          </div>
          <button
            className="addButton"
            onClick={() => {
              console.log(`Add button clicked`);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainItemCard;
