import "./CardStyles.css";

export default function CardButton({ handleSearch }) {
  return (
    <button className="card__button" onClick={handleSearch}>
      <img src={require("../images/icon-dice.svg").default} alt="dice" />
    </button>
  );
}
