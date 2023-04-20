import React from "react";
import UpArrow from "../../assets/icons/up_arrow.png";
import { SpecialMenuList } from "../../data/SpecialMenuList.js";
import SpecialMenuCard from "../specialItemCard/SpecialMenuCard.jsx";
import WelcomeCard from "../welcomeCard/WelcomeCard.jsx";
import "./SpecialTab.css";

function SpecialTab() {
  return (
    <div className="specialTab">
      <WelcomeCard />
      <div className="divider">
        <div className="title">Today's Special</div>
        <div className="line"></div>
        <img src={UpArrow} alt="close section icon" />
      </div>
      <div className="itemList">
        {SpecialMenuList.map((item, index) => {
          return (
            <SpecialMenuCard
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
}

export default SpecialTab;
