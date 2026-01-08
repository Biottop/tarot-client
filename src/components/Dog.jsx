export function Dog() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <img
        src="/assets/cards/face_cachee.png"
        alt="dog"
        style={{
          width: "min(12vw, 110px)",
          aspectRatio: "3 / 5",
          objectFit: "contain"
        }}
      />
    </div>
  );
}
