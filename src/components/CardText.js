import "./CardStyles.css";

export default function CardText({ sentence }) {
  return (
    <div className="texts">
      <h5 className="id__text">advice #{sentence.slip.id}</h5>
      <h1 className="advice__text">"{sentence.slip.advice}"</h1>
      <img
        className="divider__image"
        src={require("../images/pattern-divider-mobile.svg").default}
        alt="divider"
      />
    </div>
  );
}
