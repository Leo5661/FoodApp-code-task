import React, { useEffect, useState } from "react";
import { TabMenu } from "../../data/TabMenu";
import "./TabContainer.css";
import SpecialTab from "../tabs/SpecialTab";
import MainTab from "../tabs/MainTab";

function TabContainer() {
  const [activeTab, setActiveTab] = useState(0);

  const handelTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabContainer">
      <div className="tabList">
        {TabMenu.map((item, index) => {
          return (
            <div
              key={index}
              className={`tabName ${activeTab === index ? "activeTab" : ""}`}
              onClick={() => handelTabClick(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="tabBody">
        {(() => {
          switch (activeTab) {
            case 0:
              return <SpecialTab />;
            case 1:
              return <MainTab />;
          }
        })()}
      </div>
      <div className={`itemMenuBtn ${activeTab === 1 ? "showMenuBtn" : ""}`}>
        Menu
      </div>
      <div className="space"></div>
    </div>
  );
}

export default TabContainer;
