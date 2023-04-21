import "./WelcomeCard.css";
import cafePic from "/cafe.png";

function WelcomeCard() {
  return (
    <div className="welcomeCard">
      <img src={cafePic} alt="Welcome card background" />
      <div className="welcomeText">
        Welcome to
        <br />
        Sacred Earth Cafe
      </div>
    </div>
  );
}

export default WelcomeCard;
