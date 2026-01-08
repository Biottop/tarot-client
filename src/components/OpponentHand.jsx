// client/src/components/OpponentHand.jsx
export default function OpponentHand({ position }) {
  return (
    <div style={getOpponentStyle(position)}>
      <img
        src="/assets/cards/face_cachee.png"
        alt="hidden"
        style={{
          width: "min(10vw, 90px)",
          aspectRatio: "3 / 5",
          objectFit: "contain"
        }}
      />
    </div>
  );
}

function getOpponentStyle(position) {
  const base = {
    position: "fixed",
    transform: "translate(-50%, -50%)"
  };

  switch (position) {
    case "top":
      return { ...base, top: "10%", left: "50%" };
    case "left":
      return { ...base, top: "50%", left: "10%" };
    case "right":
      return { ...base, top: "50%", left: "90%" };
    case "top-left":
      return { ...base, top: "15%", left: "30%" };
    case "top-right":
      return { ...base, top: "15%", left: "70%" };
    default:
      return base;
  }
}
