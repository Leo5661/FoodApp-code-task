import React from "react";
import veg from "../../assets/icons/veg.png";
import nonVeg from "../../assets/icons/non_veg.png";

function CurrentOrderCard({ name, price, quantity, isVeg, status }) {
  return (
    <div className="orderItemCard">
      <div className="itemDetails">
        <img src={`${isVeg ? veg : nonVeg}`} />
        <div className="nameAndPrice">
          <div className="name">{name}</div>
          <div className="price">
            <span>&#8377;</span> {price}
          </div>
        </div>
        <button
          className="addButton"
          onClick={() => {
            console.log(`Add button clicked`);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default CurrentOrderCard;
