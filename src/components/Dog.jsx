// client/src/components/Dog.jsx
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
              src={`/assets/cards/${c.suit}_${c.value}.png`}
              style={{
                width: "min(12vw, 110px)",
                aspectRatio: "3/5",
                objectFit: "coutain"
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
