// client/src/components/Dog.jsx
import { getCardImage } from "../utils/cardImages";
export function Dog({revealed, cards}) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      {revealed ? (
        <div style = {{ display: "flex", gap: "10px" }}>
          {cards.map((c, i) => (
            <img
              key={i}
              src={getCardImage(c.suit, c.value)}
              style={{
                width: "min(12vw, 110px)",
                aspectRatio: "3/5",
                objectFit: "contain"
              }}
            />
          ))}
        </div>
      ) : (
      <img
        src="/assets/cards/face_cachee.png"
        alt="dog"
        style={{
          width: "min(12vw, 110px)",
          aspectRatio: "3 / 5",
          objectFit: "contain"
        }}
      />
      )}
    </div>
  );
}
