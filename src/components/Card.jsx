import { getCardImage } from "../utils/cardImages"

export default function Card({ suit, value }) {
  return (
    <img
      src={getCardImage(suit, value)}
      alt={`${suit} ${value}`}
      style={{
        width: "min(12vw, 18vh, 110px)",
        aspectRatio: "3 / 5",
        objectFit: "contain",
        borderRadius: "6px"
      }}
    />
  );
}
