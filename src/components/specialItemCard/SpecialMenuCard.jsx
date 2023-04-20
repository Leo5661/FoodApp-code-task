import React, { useContext, useEffect, useState } from "react";
import "./SpecialMenuCard.css";
import veg from "../../assets/icons/veg.png";
import nonVeg from "../../assets/icons/non_veg.png";
import AddButton from "../addButton/AddButton";
import CountContext from "../../context/CountContext";
import { json } from "react-router-dom";

function SpecialMenuCard({ src, itemName, itemPrice, isVeg, id }) {
  let [count, setCount] = useState(0);
  let [totalCount, setTotalCount] = useContext(CountContext);
  const [alredypresent, setIsAlreadyPresent] = useState(false);

  const addToLocal = (list) => {
    list.push({
      id: id,
      name: itemName,
      price: itemPrice,
      isVeg: isVeg,
      count: count,
    });
    localStorage.setItem("curentItem", JSON.stringify(list));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("curentItem") || `[]`);

    if (items.length !== 0) {
      for (const item of items) {
        if (item.id === id) {
          setCount(item.count);
          return;
        } else {
          return;
        }
      }
    }
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("curentItem") || `[]`);
    let index;

    if (items.length !== 0) {
      for (const item of items) {
        if (item.id === id) {
          setIsAlreadyPresent(true);
          index = items.findIndex((item) => item.id === id);
          items.splice(index, 1);
          addToLocal(items);
          return;
        } else {
        }
      }
    } else if (items.length === 0 && count !== 0) {
      addToLocal(items);
      return;
    }

    if (items.length !== 0 && !alredypresent && count !== 0) {
      addToLocal(items);
    }
  }, [count]);

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
