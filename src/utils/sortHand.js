// Définition des familles rouges et noires
const RED = ["HEARTS", "DIAMONDS"];
const BLACK = ["SPADES", "CLUBS"];

export function buildDynamicSuitOrder(cards) {
  const suitsInHand = new Set(cards.map(c => c.suit));

  const reds = RED.filter(s => suitsInHand.has(s));
  const blacks = BLACK.filter(s => suitsInHand.has(s));

  const order = [];

  // Cas 1 : 2 rouges + 2 noires → Rouge / Noir / Rouge / Noir
  if (reds.length === 2 && blacks.length === 2) {
    order.push(reds[0], blacks[0], reds[1], blacks[1]);
  }

  // Cas 2 : 1 rouge + 2 noires → Noir / Rouge / Noir
  else if (reds.length === 1 && blacks.length === 2) {
    order.push(blacks[0], reds[0], blacks[1]);
  }

  // Cas 3 : 2 rouges + 1 noir → Rouge / Noir / Rouge
  else if (reds.length === 2 && blacks.length === 1) {
    order.push(reds[0], blacks[0], reds[1]);
  }

  // Cas 4 : 1 rouge + 1 noir → Rouge / Noir
  else if (reds.length === 1 && blacks.length === 1) {
    order.push(reds[0], blacks[0]);
  }

  // Cas 5 : 0 rouge → Noir uniquement
  else if (reds.length === 0 && blacks.length > 0) {
    order.push(...blacks);
  }

  // Cas 6 : 0 noir → Rouge uniquement
  else if (blacks.length === 0 && reds.length > 0) {
    order.push(...reds);
  }

  // Ajout des atouts et de l'excuse
  if (suitsInHand.has("TRUMP")) order.push("TRUMP");
  if (suitsInHand.has("FOOL")) order.push("FOOL");

  return order;
}

/**
 * Tri final de la main :
 * - Suit selon l'ordre dynamique
 * - Valeur croissante dans chaque famille
 */
export function sortHandSmart(cards) {
  const suitOrder = buildDynamicSuitOrder(cards);

  return [...cards].sort((a, b) => {
    const sa = suitOrder.indexOf(a.suit);
    const sb = suitOrder.indexOf(b.suit);

    if (sa !== sb) return sa - sb;

    return a.value - b.value;
  });
}
