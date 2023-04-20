import React from "react";
import "./StoreHome.css";
import logo from "../../assets/icons/logo.png";
import voice from "../../assets/icons/voice.png";
import hashTag from "../../assets/icons/hash_tag.png";
import TabContainer from "../../components/tabContainer/TabContainer";

function StoreHome() {
  return (
    <div className="storeHome">
      <div className="topBar">
        <div className="logo">
          <img className="logoImg" src={logo} alt="Store logo" />
          <h2>Sacred Earth Cafe</h2>
        </div>
        <div className="menu">
          <div className="menuBtn">
            <img src={voice} alt="voice search icon" />
          </div>
          <div className="menuBtn">
            <img src={hashTag} alt="qr sacn icon" />
          </div>
        </div>
      </div>
      <TabContainer />
    </div>
  );
}

export default StoreHome;
