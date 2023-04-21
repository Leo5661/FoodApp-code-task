import React, { useEffect, useState } from "react";
import "./Cart.css";
import leftArrow from "../../assets/icons/left_arrow.png";
import rightArrow from "../../assets/icons/right_arrow.png";
import iconWaiter from "../../assets/icons/icon-waiter.png";
import { useNavigate } from "react-router-dom";
import UpArrow from "../../assets/icons/up_arrow.png";
import OrderCard from "../../components/currentOrderCard/OrderCard";

function Cart() {
  let [count, setCount] = useState(0);

  const [currentList, setCurrentList] = useState([]);
  const [previousList, setPreviousList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const currentLocalList = JSON.parse(
      localStorage.getItem("currentItem") || `[]`
    );
    const previousLocalList = JSON.parse(
      localStorage.getItem("previousItem") || `[]`
    );

    if (currentLocalList.length !== 0) {
      for (const item of currentLocalList) {
        count += Number(item.count);
        setCount(count);
        if (item.count === 0) {
          let index = currentLocalList.findIndex((item) => item.id === id);
          currentLocalList.splice(index, 1);
        } else {
          setCurrentList((list) => [...list, item]);
        }
      }
      console.log(count);
    }

    if (previousLocalList.length !== 0) {
      for (const item of previousLocalList) {
        if (item.count === 0) {
          let index = previousLocalList.findIndex((item) => item.id === id);
          previousLocalList.splice(index, 1);
        } else {
          setPreviousList((list) => [...list, item]);
        }
      }
    }
  }, []);

  const handelBackClick = () => {
    navigate(-1);
  };

  const handelPlaceOrder = () => {
    localStorage.setItem("previousItem", JSON.stringify(currentList));
    localStorage.removeItem("currentItem");
    navigate("/");
  };

  return (
    <div className="placeOrder">
      <div className="topBar">
        <div className="menuBtn marginLeft" onClick={handelBackClick}>
          <img className="logoImg" src={leftArrow} alt="back button" />
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

        {currentList.length !== 0 ? (
          <div className="itemListBox">
            {currentList.map((item, index) => {
              return (
                <OrderCard
                  key={index}
                  name={item.name}
                  id={item.id}
                  quantity={item.count}
                  price={item.price}
                  isVeg={item.isVeg}
                  isCurrent={true}
                />
              );
            })}
            <div className="cookingInstruction">Add cooking instruction</div>
          </div>
        ) : (
          <></>
        )}

        <div className="divider">
          <div className="title marginLeft">Previous orders</div>
          <div className="line"></div>
          <img className="marginRight" src={UpArrow} alt="close section icon" />
        </div>

        {previousList.length !== 0 ? (
          <div className="itemListBox">
            {previousList.map((item, index) => {
              return (
                <OrderCard
                  key={index}
                  name={item.name}
                  id={item.id}
                  quantity={item.count}
                  price={item.price}
                  isVeg={item.isVeg}
                  isCurrent={false}
                />
              );
            })}
            <div className="cookingInstruction">Cooking instruction</div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <button
        className="bottomBar"
        disabled={currentList.length === 0}
        onClick={handelPlaceOrder}
      >
        <div className="noOfItem marginLeft">{`${count} ${
          count <= 1 ? "Item" : "Items"
        }`}</div>
        <div className="placeOrderBtn marginRight">
          <h2>Place Order</h2>
          <div className="arrow">
            <img src={rightArrow} alt="place order icon" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default Cart;
