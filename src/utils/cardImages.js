// client/src/utils/cardImages.js
export function getCardImage(suit, value) {
  // Normaliser la famille en minuscule
  const s = suit.toLowerCase();

  const valueName = {
    11: "jack",
    12: "knight",
    13: "queen",
    14: "king"
  }[value] || value;

  // Atouts
  if (s === "trump") {
    return `/assets/cards/trump_${value}.png`;
  }

  // Excuse
  if (s === "fool") {
    return `/assets/cards/fool.png`;
  }

  // Couleurs classiques
  return `/assets/cards/${s}_${valueName}.png`;
}
