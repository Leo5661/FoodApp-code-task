import "./AddButton.css";
import Sub from "../../assets/icons/min.png";
import Add from "../../assets/icons/add.png";

function AddButton({ onNegativeClick, onPositiveClick, onClick, count }) {
  const InitialButton = () => {
    return (
      <div className="initialBtn" onClick={onClick}>
        <div className="markerBox">
          <img className="marker" src={Add} alt="Add icon" />
        </div>
        <div className="text">Add</div>
      </div>
    );
  };

  const EditBtn = () => {
    return (
      <div className="initialBtn">
        <div className="markerBox" onClick={onNegativeClick}>
          <img className="marker" src={Sub} alt="Subtract icon" />
        </div>
        <div className="text">{count}</div>
        <div className="markerBox" onClick={onPositiveClick}>
          <img className="marker" src={Add} alt="Add icon" />
        </div>
      </div>
    );
  };

  return (
    <div className="addButton">
      {count === 0 ? <InitialButton /> : <EditBtn />}
    </div>
  );
}

export default AddButton;
