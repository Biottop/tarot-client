// client/src/components/Hand.jsx
import Card from "./Card";

export default function Hand({ cards }) {
  const half = Math.ceil(cards.length / 2);
  const topRow = cards.slice(0, half);
  const bottomRow = cards.slice(half);

  // Taille responsive des cartes
  const cardWidth = Math.min(window.innerWidth * 0.12, 110);
  const overlap = -(cardWidth * 0.45);

  // Offset vertical basé sur la largeur de l’écran (stable)
  const screenW = window.innerWidth;
  const verticalOffset = Math.min(
    Math.max(screenW * 0.05, 60), // min 60px
    140                           // max 140px
  );

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        height: "200px", // hauteur fixe, stable
        pointerEvents: "none"
      }}
    >
      {/* Ligne du haut */}
      <div
        style={{
          position: "absolute",
          bottom: verticalOffset,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: `${overlap}px`,
          zIndex: 1,
          pointerEvents: "auto"
        }}
      >
        {topRow.map((c, i) => (
          <div key={i} style={{ marginLeft: i === 0 ? 0 : overlap }}>
            <Card suit={c.suit} value={c.value} />
          </div>
        ))}
      </div>

      {/* Ligne du bas */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: `${overlap}px`,
          zIndex: 2,
          pointerEvents: "auto"
        }}
      >
        {bottomRow.map((c, i) => (
          <div key={i} style={{ marginLeft: i === 0 ? 0 : overlap }}>
            <Card suit={c.suit} value={c.value} />
          </div>
        ))}
      </div>
    </div>
  );
}
