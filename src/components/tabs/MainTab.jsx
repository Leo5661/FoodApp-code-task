import React from "react";
import "./MainTab.css";
import UpArrow from "../../assets/icons/up_arrow.png";
import MainItemCard from "../mainItemCard/MainItemCard";
import { MainMenuList } from "../../data/MainMenuList";

function MainTab() {
  return (
    <div className="mainTab">
      {MainMenuList.map((item, index) => {
        return (
          <div key={index} className="category">
            <div className="divider">
              <div className="title">{item.category}</div>
              <div className="line"></div>
              <img src={UpArrow} alt="close section icon" />
            </div>
            <div className="itemList">
              {item.itemList.map((item, index) => {
                return (
                  <MainItemCard
                    key={index}
                    src={item.src}
                    itemName={item.itemName}
                    itemPrice={item.itemPrice}
                    isVeg={item.isVeg}
                    id={item.id}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainTab;
