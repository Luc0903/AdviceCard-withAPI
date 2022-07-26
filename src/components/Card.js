import CardButton from "./CardButton";
import CardText from "./CardText";
import { useState } from "react";
import "./CardStyles.css";

const initialState = {
  slip: {
    advice: "Your advice will appear here",
    id: "x"
  }
};

export default function Card() {
  const [sentence, setSentence] = useState(initialState);

  async function handleSearch() {
    try {
      let res = await fetch("https://api.adviceslip.com/advice");
      let json = await res.json();
      setSentence(json);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main className="container">
      <div className="container__content">
        <CardButton handleSearch={handleSearch} />
        <CardText sentence={sentence} />
      </div>
    </main>
  );
}
