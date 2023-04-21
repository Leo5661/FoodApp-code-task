import { useContext, useState } from "react";
import { BottomNavList } from "../../data/BottomNavList";
import "./App.css";
import StoreHome from "../storehome/StoreHome";
import { useNavigate } from "react-router-dom";
import CountContext from "../../context/CountContext";

function App() {
  const [isActive, setIsActive] = useState(1);
  const [totalItemInCart] = useContext(CountContext);

  const navgate = useNavigate();

  const handelMenuClick = (index) => {
    setIsActive(index);
    if (index == "2") {
      navgate("/placeOrder");
    }
  };

  return (
    <div className="container">
      <div className="fragment">
        {(() => {
          switch (isActive) {
            case 0:
              return <div>This is first tab</div>;
            case 1:
              return <StoreHome />;
          }
        })()}
      </div>
      <div className="bottomNav">
        {BottomNavList.map((item, index) => {
          return (
            <div
              key={index}
              className={`navItem ${isActive === index ? "active" : ""}`}
              onClick={() => handelMenuClick(index)}
            >
              {item.src()}
              <div
                className={`badge ${
                  item.badge && totalItemInCart != 0 ? "showBadge" : ""
                }`}
              >
                {`${totalItemInCart}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
