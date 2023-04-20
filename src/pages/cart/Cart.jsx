import React from "react";
import "./Cart.css";
import leftArrow from "../../assets/icons/left_arrow.png";
import rightArrow from "../../assets/icons/right_arrow.png";
import iconWaiter from "../../assets/icons/icon-waiter.png";
import { useNavigate } from "react-router-dom";
import UpArrow from "../../assets/icons/up_arrow.png";

function Cart() {
  const count = 0;

  const navigate = useNavigate();

  const handelBackClick = () => {
    navigate(-1);
  };

  const handelPlaceOrder = () => {
    navigate("/");
  };

  return (
    <div className="placeOrder">
      <div className="topBar">
        <div className="menuBtn marginLeft">
          <img
            className="logoImg"
            src={leftArrow}
            alt="back button"
            onClick={handelBackClick}
          />
        </div>
        <h2>Sacred Earth Cafe</h2>
        <div className="menuBtn marginRight">
          <img src={iconWaiter} alt="help icon" />
        </div>
      </div>

      <div className="orderDetails">
        <div className="divider">
          <div className="title marginLeft">Current Order</div>
          <div className="line"></div>
          <img className="marginRight" src={UpArrow} alt="close section icon" />
        </div>

        <div className="itemListBox">
          <div className="cookingInstruction">Add cooking instruction</div>
        </div>

        <div className="divider">
          <div className="title marginLeft">Previous orders</div>
          <div className="line"></div>
          <img className="marginRight" src={UpArrow} alt="close section icon" />
        </div>

        <div className="itemListBox">
          <div className="cookingInstruction">Cooking instruction</div>
        </div>
      </div>
      <div className="bottomBar" onClick={handelPlaceOrder}>
        <div className="noOfItem marginLeft">{`${count} ${
          count < 1 ? "Item" : "Items"
        }`}</div>
        <div className="placeOrderBtn marginRight">
          <h2>Place Order</h2>
          <div className="arrow">
            <img src={rightArrow} alt="place order icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
